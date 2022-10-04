using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class WorkoutDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Workouts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "Description",
                value: "Testing 1 description");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 2,
                column: "Description",
                value: "Testing 2 description");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 3,
                column: "Description",
                value: "Testing 3 description");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 4,
                column: "Description",
                value: "Testing 4 description");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 5,
                column: "Description",
                value: "Testing 5 description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Workouts");
        }
    }
}
