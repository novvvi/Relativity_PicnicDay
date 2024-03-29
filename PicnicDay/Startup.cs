﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Serialization;
using PicnicDay.Models;
using PicnicDay.Controllers;
// using Hangfire;
// using Hangfire.SqlServer;
// using Hangfire.AspNetCore;
using PicnicDay.Services;
using System.IO;

namespace PicnicDay
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddHangfire(x => x.UseSqlServerStorage(Configuration["DBInfo:ConnectionString"]));
            // services.AddHangfireServer();

            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                builder =>
                {
                    builder.WithOrigins("https://picnicday.azurewebsites.net", "http://localhost:4200", "https://localhost:4200")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
                });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            .AddJsonOptions(options => {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                var resolver = options.SerializerSettings.ContractResolver;
                if(resolver != null)
                    (resolver as DefaultContractResolver).NamingStrategy = null;
            });

            services.AddHttpsRedirection(options =>
            {
                options.HttpsPort = 443;
            });
            

            services.AddDbContextPool<PDDbContext>(options => options.UseSqlServer(Configuration["DBInfo:ConnectionString"]));

        }

        // if needed to use Hangfire add this back to attribute IBackgroundJobClient backgroundJobs,
        public void Configure( IApplicationBuilder app, IHostingEnvironment env) 
        {


            // app.UseHangfireDashboard();
            // RecurringJob.AddOrUpdate(() => UpdateSqlService.BackgroundUpdateMssql(), Cron.Minutely);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseStaticFiles();
            app.UseDefaultFiles();


            
            app.UseHttpsRedirection();
            app.UseCors("MyPolicy");
            app.UseMvc();

            app.UseMvcWithDefaultRoute();
        }
    }
}
