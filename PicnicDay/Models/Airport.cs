using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PicnicDay.Models
{
    public class Airport
    {
        [Key]
        public string airport_id {get; set;}

        [Required]
        public string type {get; set;}

        [Required]
        public string name {get; set;}
        
        [Required]
        public string country {get; set;}
        
        public string municipality {get; set;}

        [Required]
        public string elevation {get; set;}

        [Required]
        public string latitude {get; set;}
        [Required]
        public string longitude {get; set;}

        public List<Runway> runwayName {get; set;}

        public DateTime updatedAt {get;set;} = DateTime.Now;

    }
}