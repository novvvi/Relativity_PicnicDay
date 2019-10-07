using System;
using Xunit;
using PicnicDay.Services;
using PicnicDay.Controllers;
using PicnicDay.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace PicnicDay.test
{
    public class UnitTest1
    {

        AirportsController controller = new AirportsController(Models.PDDbContext.DbConnect());
        
        [Fact]
        public void Get_ReturnAirportData()
        {
            // arrange
            string expected = "KORD";

            // act
            ActionResult<Airport[]> returnValue = controller.info(expected);
            Airport[] actual = returnValue.Value;

            //assert
            Assert.NotNull(actual);
            Assert.Equal(expected, actual[0].airport_id);
        }

        

        [Fact]
        public void Match_landingPrediction_AirportWithRunwayDegree_ReturnCaridnals()
        {
            Airport[] array = new Airport[] {new Airport(){runwayName = new List<Runway>(), airport_id = "KORD"}};
            ReportService service = new ReportService(array);

            // arrange
            List<string> RunwayList = new List<string>(){"22R","18L", "9C", "14R", "27R"};
            double windDirection = 360.00;

            List<string> expected = new List<string>(){"SW", "S", "SE"};


            // act
            List<string> actual = service.runWay(RunwayList,windDirection);
            

            //assert
            Assert.Equal(expected, actual);
        }


        [Fact]
        public void Match_landingPrediction_Heliport_ReturnCaridnals()
        {
            Airport[] array = new Airport[] {new Airport(){runwayName = new List<Runway>(), airport_id = "KORD"}};
            ReportService service = new ReportService(array);


            // arrange
            List<string> RunwayList = new List<string>(){"H1","H2", "H3", "H4", "H5"};
            double windDirection = 360.00;

            List<string> expected = new List<string>(){"All"};


            // act
            List<string> actual = service.runWay(RunwayList,windDirection);
            

            //assert
            Assert.Equal(expected, actual);
        }


        [Fact]
        public void Match_landingPrediction_AirportWithCaridnalsRunway_ReturnCaridnals()
        {
            Airport[] array = new Airport[] {new Airport(){runwayName = new List<Runway>(), airport_id = "KORD"}};
            ReportService service = new ReportService(array);


            // arrange
            List<string> RunwayList = new List<string>(){"S","SW", "SE", "W", "NE"};
            double windDirection = 360.00;

            List<string> expected = new List<string>(){"S","SW", "SE"};


            // act
            List<string> actual = service.runWay(RunwayList,windDirection);
            

            //assert
            Assert.Equal(expected, actual);
        }


        
        [Fact]
        public void Response200_GetWeather_ReturnJSON()
        {
            Airport[] array = new Airport[] {new Airport(){runwayName = new List<Runway>(), airport_id = "KORD", latitude = "33.94250107", longitude = "-118.4079971"}};
            ReportService service = new ReportService(array);


            // arrange
            string expected = "\"cod\":200";


            // act
            service.GetWeathers().Wait();
            

            //assert
            Assert.NotNull(service.json);
            Assert.True(service.json.Contains(expected));
        }


        [Fact]
        public void NotNull_Caching_ReturnWeatherModel()
        {
            Airport[] array = new Airport[] {new Airport(){runwayName = new List<Runway>(), airport_id = "KORD", latitude = "33.94250107", longitude = "-118.4079971"}};
            ReportService service = new ReportService(array);


            // act
            Weather result = service.Caching();
            
            
            //assert
            Assert.NotNull(result);
        }
        


    }
}
