using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PicnicDay.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Airports",
                columns: table => new
                {
                    airport_id = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    name = table.Column<string>(nullable: false),
                    country = table.Column<string>(nullable: false),
                    municipality = table.Column<string>(nullable: true),
                    elevation = table.Column<string>(nullable: false),
                    latitude = table.Column<string>(nullable: false),
                    longitude = table.Column<string>(nullable: false),
                    updatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airports", x => x.airport_id);
                });

            migrationBuilder.CreateTable(
                name: "Runways",
                columns: table => new
                {
                    runway_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    le_ident = table.Column<string>(nullable: true),
                    he_ident = table.Column<string>(nullable: true),
                    airport_id = table.Column<string>(nullable: true),
                    updatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Runways", x => x.runway_id);
                    table.ForeignKey(
                        name: "FK_Runways_Airports_airport_id",
                        column: x => x.airport_id,
                        principalTable: "Airports",
                        principalColumn: "airport_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Runways_airport_id",
                table: "Runways",
                column: "airport_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Runways");

            migrationBuilder.DropTable(
                name: "Airports");
        }
    }
}
