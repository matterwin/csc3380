using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class _4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "WorkoutSteps",
                columns: new[] { "ID", "WorkoutID", "Instruction", "Time" },
                values: new object[,]
                {
                    { 5, 1, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, 2, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, 3, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, 4, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, 5, "Instruction #5", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 5, 1 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 5, 2 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 5, 3 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 5, 4 });

            migrationBuilder.DeleteData(
                table: "WorkoutSteps",
                keyColumns: new[] { "ID", "WorkoutID" },
                keyValues: new object[] { 5, 5 });
        }
    }
}
