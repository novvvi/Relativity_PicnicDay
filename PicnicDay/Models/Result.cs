using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PicnicDay.Models
{
    public class Result
    {

        public string weather{get; set;}

        public double temp_max {get; set;}

        public double temp_min {get; set;}

        public double speed {get; set;}

        public List<string> directions {get; set;}

        
    }
}