﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PicnicDay.Models;

namespace PicnicDay.Migrations
{
    [DbContext(typeof(PDDbContext))]
    partial class PDDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PicnicDay.Models.Airport", b =>
                {
                    b.Property<string>("airport_id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("country")
                        .IsRequired();

                    b.Property<string>("elevation")
                        .IsRequired();

                    b.Property<string>("latitude")
                        .IsRequired();

                    b.Property<string>("longitude")
                        .IsRequired();

                    b.Property<string>("municipality");

                    b.Property<string>("name")
                        .IsRequired();

                    b.Property<string>("type")
                        .IsRequired();

                    b.Property<DateTime>("updatedAt");

                    b.HasKey("airport_id");

                    b.ToTable("Airports");
                });

            modelBuilder.Entity("PicnicDay.Models.Runway", b =>
                {
                    b.Property<int>("runway_id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("airport_id");

                    b.Property<string>("he_ident");

                    b.Property<string>("le_ident");

                    b.Property<DateTime>("updatedAt");

                    b.HasKey("runway_id");

                    b.HasIndex("airport_id");

                    b.ToTable("Runways");
                });

            modelBuilder.Entity("PicnicDay.Models.Runway", b =>
                {
                    b.HasOne("PicnicDay.Models.Airport", "airportDetail")
                        .WithMany("runwayName")
                        .HasForeignKey("airport_id");
                });
#pragma warning restore 612, 618
        }
    }
}
