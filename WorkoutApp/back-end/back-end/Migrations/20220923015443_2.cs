using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 1 },
                column: "Instruction",
                value: "Instruction #2");

            migrationBuilder.InsertData(
                table: "WorkoutSteps",
                columns: new[] { "ID", "WorkoutID", "Instruction", "Time" },
                values: new object[,]
                {
                    { 2, 1, "Instruction #3", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 1, "Instruction #4", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, 1, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "Title",
                value: "Workout #2");

            migrationBuilder.InsertData(
                table: "Workouts",
                columns: new[] { "ID", "Title" },
                values: new object[,]
                {
                    { 2, "Workout #3" },
                    { 3, "Workout #4" },
                    { 4, "Workout #5" },
                    { 5, "Workout #6" }
                });

            migrationBuilder.InsertData(
                table: "WorkoutSteps",
                columns: new[] { "ID", "WorkoutID", "Instruction", "Time" },
                values: new object[,]
                {
                    { 1, 2, "Instruction #2", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, 2, "Instruction #3", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 2, "Instruction #4", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, 2, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 1, 3, "Instruction #2", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, 3, "Instruction #3", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 3, "Instruction #4", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, 3, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 1, 4, "Instruction #2", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, 4, "Instruction #3", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 4, "Instruction #4", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, 4, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 1, 5, "Instruction #2", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, 5, "Instruction #3", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 5, "Instruction #4", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, 5, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 1 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 1 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 2 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 2 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 3 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 3 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 3 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 4 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 4 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 4 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 4 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 5 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 2, 5 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 3, 5 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 4, 5 });

            migrationBuilder.DeleteData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.UpdateData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 1, 1 },
                column: "Instruction",
                value: "HELLO");

            migrationBuilder.UpdateData(
                table: "Workouts",
                keyColumn: "ID",
                keyValue: 1,
                column: "Title",
                value: "Workout 1");
        }
    }
}
