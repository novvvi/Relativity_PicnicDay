using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PicnicDay.Models;
using EFCore.BulkExtensions;
using PicnicDay.Services;
using HtmlAgilityPack;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace PicnicDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class AirportsController : ControllerBase
    {
        private readonly PDDbContext _context;

        public AirportsController(PDDbContext context)
        {
            _context = context;
        }


        [HttpGet("")]
        public ActionResult<SearchData[]> All()
        {
            SearchData[] allAirport = _context.Airports.Select(a => new SearchData {name = a.name, airport_id = a.airport_id}).ToArray();
            return allAirport;
        }


        [HttpGet("[action]/{id}")]
        public ActionResult<Airport[]> info(string id)
        {
            Airport[] selected = _context.Airports.Include(a => a.runwayName).Where(a => a.airport_id == id).ToArray();
            return selected;
        }


        [HttpGet("[action]/{id}")]
        public ActionResult<Result> result(string id)
        {
            Airport[] selected = _context.Airports.Include(a => a.runwayName).Where(a => a.airport_id == id).ToArray();
            Result result = ReportService.CombineData(selected);
            return result;
        }

        

    }

    public class SearchData
    {
        public string name {get; set;}
        public string airport_id {get; set;}
    }
}
