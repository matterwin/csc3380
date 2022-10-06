using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirebaseID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.ID);
                    table.UniqueConstraint("AK_Users_FirebaseID", x => x.FirebaseID);
                });

            migrationBuilder.CreateTable(
                name: "Workouts",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirebaseID = table.Column<string>(type: "nvarchar(max)", nullable: false)
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
                    Instruction = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WorkoutTime = table.Column<int>(type: "int", nullable: false),
                    WorkoutID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkoutSteps", x => x.ID);
                    table.ForeignKey(
                        name: "FK_WorkoutSteps_Workouts_WorkoutID",
                        column: x => x.WorkoutID,
                        principalTable: "Workouts",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "ID", "FirebaseID", "FirstName", "LastName", "MiddleName" },
                values: new object[,]
                {
                    { 1, "1", "FirstName1", "LastName1", "MiddleName1" },
                    { 2, "2", "FirstName2", "LastName2", "MiddleName2" },
                    { 3, "3", "FirstName3", "LastName3", "MiddleName3" },
                    { 4, "4", "FirstName4", "LastName4", "MiddleName4" },
                    { 5, "5", "FirstName4", "LastName5", "MiddleName5" }
                });

            migrationBuilder.InsertData(
                table: "Workouts",
                columns: new[] { "ID", "FirebaseID", "Title" },
                values: new object[,]
                {
                    { 1, "1", "Workout #1" },
                    { 2, "2", "Workout #2" },
                    { 3, "3", "Workout #3" },
                    { 4, "4", "Workout #4" },
                    { 5, "5", "Workout #5" }
                });

            migrationBuilder.InsertData(
                table: "WorkoutSteps",
                columns: new[] { "ID", "Instruction", "WorkoutID", "WorkoutTime" },
                values: new object[,]
                {
                    { 1, "Instruction #1", 1, 1 },
                    { 2, "Instruction #2", 1, 2 },
                    { 3, "Instruction #3", 1, 3 },
                    { 4, "Instruction #4", 1, 4 },
                    { 5, "Instruction #5", 1, 5 },
                    { 6, "Instruction #1", 2, 1 },
                    { 7, "Instruction #2", 2, 2 },
                    { 8, "Instruction #3", 2, 3 },
                    { 9, "Instruction #4", 2, 4 },
                    { 10, "Instruction #5", 2, 5 },
                    { 11, "Instruction #1", 3, 1 },
                    { 12, "Instruction #2", 3, 2 },
                    { 13, "Instruction #3", 3, 3 },
                    { 14, "Instruction #4", 3, 4 },
                    { 15, "Instruction #5", 3, 5 },
                    { 16, "Instruction #1", 4, 1 },
                    { 17, "Instruction #2", 4, 2 },
                    { 18, "Instruction #3", 4, 3 },
                    { 19, "Instruction #4", 4, 4 },
                    { 20, "Instruction #5", 4, 5 },
                    { 21, "Instruction #1", 5, 1 },
                    { 22, "Instruction #2", 5, 2 },
                    { 23, "Instruction #3", 5, 3 },
                    { 24, "Instruction #4", 5, 4 },
                    { 25, "Instruction #5", 5, 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_WorkoutSteps_WorkoutID",
                table: "WorkoutSteps",
                column: "WorkoutID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "WorkoutSteps");

            migrationBuilder.DropTable(
                name: "Workouts");
        }
    }
}
