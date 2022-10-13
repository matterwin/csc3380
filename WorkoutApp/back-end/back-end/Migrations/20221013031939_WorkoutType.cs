using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class WorkoutType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WorkoutType",
                table: "Workouts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "WorkoutType",
                value: "arms");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 2,
                column: "WorkoutType",
                value: "legs");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 3,
                column: "WorkoutType",
                value: "chest");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 4,
                column: "WorkoutType",
                value: "calves");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 5,
                column: "WorkoutType",
                value: "upper body");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WorkoutType",
                table: "Workouts");
        }
    }
}
