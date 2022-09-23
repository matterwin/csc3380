using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class _3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 1 },
                column: "Instruction",
                value: "Instruction #1");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 1 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 1 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 1 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 2 },
                column: "Instruction",
                value: "Instruction #1");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 2 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 2 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 2 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 3 },
                column: "Instruction",
                value: "Instruction #1");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 3 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 3 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 3 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 4 },
                column: "Instruction",
                value: "Instruction #1");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 4 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 4 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 4 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 5 },
                column: "Instruction",
                value: "Instruction #1");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 5 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 5 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 5 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "Title",
                value: "Workout #1");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 2,
                column: "Title",
                value: "Workout #2");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 3,
                column: "Title",
                value: "Workout #3");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 4,
                column: "Title",
                value: "Workout #4");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 5,
                column: "Title",
                value: "Workout #5");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 1 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 1 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 1 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 1 },
                column: "Instruction",
                value: "Instruction #5");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 2 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 2 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 2 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 2 },
                column: "Instruction",
                value: "Instruction #5");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 3 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 3 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 3 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 3 },
                column: "Instruction",
                value: "Instruction #5");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 4 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 4 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 4 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 4 },
                column: "Instruction",
                value: "Instruction #5");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 5 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 5 },
                column: "Instruction",
                value: "Instruction #3");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 5 },
                column: "Instruction",
                value: "Instruction #4");

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 5 },
                column: "Instruction",
                value: "Instruction #5");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "Title",
                value: "Workout #2");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 2,
                column: "Title",
                value: "Workout #3");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 3,
                column: "Title",
                value: "Workout #4");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 4,
                column: "Title",
                value: "Workout #5");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 5,
                column: "Title",
                value: "Workout #6");
        }
    }
}
