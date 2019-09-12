using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;

namespace PicnicDay.Models
{
    public class Weather
    {
        
        public Weather(string json)
        {
            var jObject = JsonConvert.DeserializeObject<dynamic>(json);
            dynamic weatherArray = jObject.weather;
            weather = weatherArray[0].main;
            tempMax = jObject.main.temp_max;
            tempMin = jObject.main.temp_min;
            speed = jObject.wind.speed;
            if (jObject.wind.deg != null)
            {
                degree = jObject.wind.deg;
            }
            else
            {
                degree = 0;
            }
        }


        public string weather{get; set;}

        public double tempMax {get; set;}

        public double tempMin {get; set;}

        public double speed {get; set;}
        public double degree {get; set;}
        
    }
}