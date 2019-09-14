using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using EFCore.BulkExtensions;
using PicnicDay.Controllers;
using Microsoft.Extensions.Configuration;


namespace PicnicDay.Models
{
    public class PDDbContext : DbContext
    {
        
        public PDDbContext(DbContextOptions<PDDbContext> options) : base(options) {}
        
        public IConfiguration Configuration { get; }

        public DbSet<Runway> Runways {get; set;}
        public DbSet<Airport> Airports {get; set;}


        
        public static PDDbContext DbConnect()
        {
            PDDbContext connection = new PDDbContext(new DbContextOptionsBuilder<PDDbContext>().UseSqlServer("server=envi.database.windows.net;User ID=devnovi;Password=Mylam213;database=PicnicDayDB;Trusted_Connection=False;").Options);
            return connection;
        }
        
    }
}