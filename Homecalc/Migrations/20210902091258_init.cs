using Microsoft.EntityFrameworkCore.Migrations;

namespace Homecalc.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Records",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Year = table.Column<int>(type: "int", nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    ElectricityCount = table.Column<int>(type: "int", nullable: false),
                    ElectricityPrice = table.Column<double>(type: "float", nullable: false),
                    WaterHotCount = table.Column<int>(type: "int", nullable: false),
                    WaterHotPrice = table.Column<double>(type: "float", nullable: false),
                    WaterHotDrainageCount = table.Column<int>(type: "int", nullable: false),
                    WaterHotDrinagePrice = table.Column<double>(type: "float", nullable: false),
                    WaterColdCount = table.Column<int>(type: "int", nullable: false),
                    WaterColdPrice = table.Column<double>(type: "float", nullable: false),
                    HeatingPrice = table.Column<double>(type: "float", nullable: false),
                    IntercomSysPrice = table.Column<double>(type: "float", nullable: false),
                    OSBB = table.Column<double>(type: "float", nullable: false),
                    TrashDeliver = table.Column<double>(type: "float", nullable: false),
                    Triolan = table.Column<double>(type: "float", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Records", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Records");
        }
    }
}
