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

namespace PicnicDay.Services
{
    public class UpdateSqlService
    {
        private readonly PDDbContext _context;

        public UpdateSqlService(PDDbContext context)
        {
            _context = context;
        }

        public static void BackgroundUpdateMssql()
        {
            PDDbContext context = PDDbContext.DbConnect();
            UpdateSqlService update = new UpdateSqlService(context);

            if(update.CheckForUpdate() == "true")
            {
                Console.WriteLine("Info: Mssql data is the latest version ...");
            }
            else
            {
                Console.WriteLine("Info: New Version is out, processing update...");
                if (update.CheckForUpdate() == "false")
                {
                    update.ClearAllRunways();
                    update.ClearAllAirports();
                }
                update.Download();
                List<Airport> airportList = update.AirportData();
                List<Runway> runwayList = update.RunwayData();
                string checkifAirportEmpty = airportList[1].airport_id;
                string checkifRunwayEmpty = airportList[1].airport_id;
                if (checkifAirportEmpty != "" && checkifRunwayEmpty != "")
                {
                    update.BulkInsertData(airportList, runwayList);
                    Console.WriteLine("Info: Successfully Update ...");
                }
            }
        }

        public string CheckForUpdate()
        {
            Console.WriteLine("Info: Checking OurAirport.com for latest version ...");
            RegexOptions options = RegexOptions.None;
            
            HtmlWeb website = new HtmlWeb();
            website.AutoDetectEncoding = false;
            website.OverrideEncoding = Encoding.Default;
            HtmlDocument Doc = website.Load("http://ourairports.com/data/");

            string datetimeinString = Doc.DocumentNode
            .Descendants("dl")
            .First()
            .Descendants("dt").First()
            .Descendants("span").First().InnerText;
            
            string updatedAt;

            if( !_context.Airports.Any() )
            {
                updatedAt = "";
            }
            else
            {
                updatedAt = _context.Airports.First().updatedAt.ToString("MMM d, yyyy");
            }
            
            string unformatDate = datetimeinString.Substring(datetimeinString.Length - 13, 12);
            
            Console.WriteLine(updatedAt);

            Regex regex = new Regex("[ ]{2,}", options);
            string latestVersion = regex.Replace(unformatDate, " ");
            Console.WriteLine(latestVersion);


            if(updatedAt == latestVersion)
            {
                return "true";
            }
            else if (updatedAt == "")
            {
                return "null";
            }
            else
            {
                return "false";
            }
        }

        public List<Airport> AirportData()
        {
            Console.WriteLine("Info: Converting Aiports CSV to List ...");

            string path = Directory.GetCurrentDirectory();
            var csvAirport = System.IO.File.ReadAllLines(path + "\\temp\\airports.csv");

            List<Airport> airportList = new List<Airport>();

            for (int i = 1; i < csvAirport.Count() - 1; i++)
            {
                var data = csvAirport[i].Split(',');
                
                Airport aRoll = new Airport()
                {
                    airport_id = data[1].Replace("\"", ""),
                    type = data[2].Replace("\"", ""),
                    name = data[3].Replace("\"", ""),
                    country = data[8].Replace("\"", ""),
                    municipality = data[10].Replace("\"", ""),
                    elevation = data[6],
                    latitude = data[4],
                    longitude = data[5]
                    
                };
                    
                airportList.Add(aRoll);
            }

            return airportList;
            
        }

        public List<Runway> RunwayData()
        {
            Console.WriteLine("Info: Converting Runways CSV to List ...");
            string path = Directory.GetCurrentDirectory();
            var csvRunway = System.IO.File.ReadAllLines(path + "\\temp\\runways.csv");


            List<Runway> runwayList = new List<Runway>();
            for (int i = 1; i < csvRunway.Count() - 1; i++)
            {
                var data = csvRunway[i].Split(',');
                
                Runway rRoll = new Runway()
                {
                    airport_id = data[2].Replace("\"", ""),
                    le_ident = data[8].Replace("\"", ""),
                    he_ident = data[14].Replace("\"", "")
                };
                runwayList.Add(rRoll);
            }
            
            return runwayList;
        }


        public void BulkInsertData(List<Airport> airports, List<Runway> runways)
        {
            Console.WriteLine("Info: Updating to Mssql ...");
            using (var transaction = _context.Database.BeginTransaction())
            {
                _context.BulkInsert(airports);
                _context.BulkInsert(runways);
                transaction.Commit();
            }
        }


        public void Download()
        {
            Console.WriteLine("Info: downloading for ourAirport ...");
            string startupPath = Directory.GetCurrentDirectory();

            string[] name = new string[2]
            {
                "airports.csv",
                "runways.csv"
            };
            Uri[] uris = new Uri[2]
            {
                new Uri("http://ourairports.com/data/airports.csv"),
                new Uri("http://ourairports.com/data/runways.csv")
            }; 
            
            for (int i = 0; i < uris.Length; i++)
            {
                var wc = new WebClient();
                wc.DownloadFile(uris[i] , startupPath + "\\Temp\\" + name[i] );
            }
        }



        public void ClearAllAirports()
        {
            _context.Airports.BatchDelete();
        }


        public void ClearAllRunways()
        {
            _context.Runways.BatchDelete();
        }

    }
}