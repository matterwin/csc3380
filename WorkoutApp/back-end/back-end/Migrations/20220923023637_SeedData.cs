using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Workouts",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workouts", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "WorkoutSteps",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WorkoutID = table.Column<int>(type: "int", nullable: false),
                    Instruction = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WorkoutTime = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutSteps", x => new { x.WorkoutID, x.ID });
                    table.ForeignKey(
                        name: "FK_WorkoutSteps_Workouts_WorkoutID",
                        column: x => x.WorkoutID,
                        principalTable: "Workouts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Workouts",
                columns: new[] { "ID", "Title" },
                values: new object[,]
                {
                    { 1, "Workout #1" },
                    { 2, "Workout #2" },
                    { 3, "Workout #3" },
                    { 4, "Workout #4" },
                    { 5, "Workout #5" }
                });

            migrationBuilder.InsertData(
                table: "WorkoutSteps",
                columns: new[] { "ID", "WorkoutID", "Instruction", "WorkoutTime" },
                values: new object[,]
                {
                    { 1, 1, "Instruction #1", 1 },
                    { 2, 1, "Instruction #2", 1 },
                    { 3, 1, "Instruction #3", 1 },
                    { 4, 1, "Instruction #4", 1 },
                    { 5, 1, "Instruction #5", 1 },
                    { 1, 2, "Instruction #1", 2 },
                    { 2, 2, "Instruction #2", 2 },
                    { 3, 2, "Instruction #3", 2 },
                    { 4, 2, "Instruction #4", 2 },
                    { 5, 2, "Instruction #5", 2 },
                    { 1, 3, "Instruction #1", 3 },
                    { 2, 3, "Instruction #2", 3 },
                    { 3, 3, "Instruction #3", 3 },
                    { 4, 3, "Instruction #4", 3 },
                    { 5, 3, "Instruction #5", 3 },
                    { 1, 4, "Instruction #1", 4 },
                    { 2, 4, "Instruction #2", 4 },
                    { 3, 4, "Instruction #3", 4 },
                    { 4, 4, "Instruction #4", 4 },
                    { 5, 4, "Instruction #5", 4 },
                    { 1, 5, "Instruction #1", 5 },
                    { 2, 5, "Instruction #2", 5 },
                    { 3, 5, "Instruction #3", 5 },
                    { 4, 5, "Instruction #4", 5 },
                    { 5, 5, "Instruction #5", 5 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WorkoutSteps");

            migrationBuilder.DropTable(
                name: "Workouts");
        }
    }
}
