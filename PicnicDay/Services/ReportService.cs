using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using EFCore.BulkExtensions;
using PicnicDay.Models;
using HtmlAgilityPack;
using System.Text.RegularExpressions;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Runtime.Caching;

namespace PicnicDay.Services
{
    public class ReportService
    {
        string url;
        List<Runway> runwayData;
        string airportId;

        public string json;

        public ReportService(Airport[] data)
        {
            url = $"https://api.openweathermap.org/data/2.5/weather?lat={data[0].latitude}&lon={data[0].longitude}&units=imperial&APPID=a994e5c3ac610ed83f22e601ee102e58";
            runwayData = data[0].runwayName;
            airportId = data[0].airport_id;

        }

        // public static Result CombineData(Airport[] data)
        // {
        //     ReportService service = new ReportService(data);
        //     List<string> directions = service.FormatToList();
        //     Task task = service.GetWeathers();
        //     Weather weather = service.weatherData;
        //     List<string> landingDirections = service.runWay(directions, weather.degree);
        //     Result result = new Result()
        //     {
        //         directions = landingDirections,
        //         speed = weather.speed,
        //         temp_max = weather.tempMax,
        //         temp_min = weather.tempMin,
        //         weather = weather.weather
        //     };
            
        //     return result;
        // }


        public static Result CombineData(Airport[] data)
        {
            ReportService service = new ReportService(data);
            Weather weather = service.Caching();
            List<string> directions = service.FormatToList();
            List<string> landingDirections = new List<string>();

            if (weather.degree != 0)
            {
                landingDirections = service.runWay(directions, weather.degree);
            }
            else
            {
                landingDirections.Add("All");
            }
            

            Result result = new Result()
            {
                directions = landingDirections,
                speed = weather.speed,
                temp_max = weather.tempMax,
                temp_min = weather.tempMin,
                weather = weather.weather
            };
            return result;
        }


        private Weather Caching()
        {
            ObjectCache cache = MemoryCache.Default;
            if (cache.Contains(airportId))
            {
                Console.WriteLine("***** using Cache Data ******");
                json = cache.Get(airportId).ToString();
                Console.WriteLine(json);
                Weather weather = new Weather(json);
                return weather;
            }
            else
            {
                Console.WriteLine("***** Calling API ******");
                GetWeathers().Wait();
                CacheItemPolicy policy = new CacheItemPolicy();  
                policy.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(60.0);
                cache.Set(airportId, json, policy); 
                cache.ToList().ForEach(i => Console.WriteLine(i));
                Weather weather = new Weather(json);
                return weather;
            }
            
        }


        private async Task GetWeathers()
        {
            HttpClient apiClient = new HttpClient();
            apiClient.DefaultRequestHeaders.Accept.Clear();
            apiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            using (HttpResponseMessage response = await apiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)  
                { 
                    json = await response.Content.ReadAsStringAsync();
                }
                else  
                {  
                    Console.WriteLine("Internal server Error");  
                }  
            }

        }

        private List<string> FormatToList()
        {
            List<string> directions = new List<string>();
            foreach(Runway runway in runwayData)
            {
                if (runway.le_ident != "")
                {
                    directions.Add(runway.le_ident);
                }
                if (runway.he_ident != "")
                {
                    directions.Add(runway.he_ident);
                }
            }
            
            return directions;
        }

        
        private List<string> runWay(List<string> identList, double windDirection)
        {
            // wind 360 = N , wind 0 = all direction
            // pulling le & he ident data because there could be a chance as 90 degree 
            // of wind blowing from the left or right to the runway.
            // remove all the same number 
            // remove all the Char
            // 
            
            

            Regex checkRgx = new Regex(@"^\d{1}");
            string[] caridnals = { "N", "NE", "E", "SE", "S", "SW", "W", "NW", "N" };


            if (checkRgx.IsMatch(identList[0]) || identList[0].IndexOf("H") == 0)
            {
                Console.WriteLine("---------------Degree Type");
                for(int i = 0; i < identList.Count; i++)
                {

                    double runwayDegree;
                    Regex runwayRgx = new Regex(@"^\d{1,2}[A-Z]{1}");


                    if (identList[i].IndexOf("H") == 0)
                    {
                        Console.WriteLine("-----------------H1 check");
                        if (identList.Count == 1)
                        {
                            identList[0] = "All";
                        }
                        else
                        {
                            identList.RemoveAt(i);
                            i -= 2;
                        }
                    }


                    else
                    {
                        Console.WriteLine("--------Degree with Multi");
                        Regex runwaysRgx = new Regex(@"[a-zA-Z]{1}$");

                        
                        if (runwaysRgx.IsMatch(identList[i])) //check string last index == char ? remove char and parse
                        {
                            string removedLastChar = identList[i].Remove(identList[i].Length -1);
                            runwayDegree = Double.Parse(removedLastChar);
                        }
                        else // without char and convert string to double
                        {
                            Console.WriteLine("\n\n\n\n\n\n" + identList[i] + "\n\n\n\n\n\n" );
                            runwayDegree = Double.Parse(identList[i]);
                        }

                        string identFormat = runwayDegree + "0";
                        double identDegree = double.Parse(identFormat);
                        double result = Math.Abs(identDegree - windDirection);
                        Console.WriteLine($"\n degree: {identFormat}\n");

                        // check if runway are within 90 range of wind"
                        if (result > 90)
                        {
                            int caridenalIndex = (int)Math.Round(((double)identDegree % 360) / 45);
                            if (identList.IndexOf(caridnals[caridenalIndex]) == -1)
                            {
                                identList[i] = caridnals[caridenalIndex];
                            }
                            else
                            {
                                identList.RemoveAt(i);
                                Console.WriteLine("**esisted **");
                                i --;
                            }
                            Console.WriteLine(identList[i]);
                        }
                        else
                        {
                            identList.RemoveAt(i);
                            Console.WriteLine("**Out of Range**");
                            i --;
                        }
                    }
                }
                // temperoary console logging
                identList.ForEach(i => Console.Write("{0}\t", i));

                return identList;
            }

            else
            {
                Console.WriteLine("-------------------Caridnals");
                int windIndex = (int)Math.Round(((double)windDirection % 360) / 45);
                Console.WriteLine($"\n {caridnals[windIndex]} Direction \n");
                for(int x = 0; x < identList.Count; x++)
                {
                    string breakStringToChar = caridnals[windIndex];
                    if(identList[x].Intersect(breakStringToChar).Any() || identList[x].IndexOf(breakStringToChar) != -1)
                    {
                        identList.RemoveAt(x);
                        x --;
                    }
                }
                identList.ForEach(i => Console.Write("{0}\t", i));

                return identList;
            }
        
        }
        
    }

}