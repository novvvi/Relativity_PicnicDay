using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PicnicDay.Models
{
    public class Runway
    {
        [Key]
        public int runway_id {get; set;}

        public string le_ident {get; set;}

        public string he_ident {get; set;}

        public string airport_id {get; set;}
        public Airport airportDetail {get; set;}
        public DateTime updatedAt {get;set;} = DateTime.Now;

    }
}