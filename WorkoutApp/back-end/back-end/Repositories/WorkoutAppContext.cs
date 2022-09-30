using Microsoft.EntityFrameworkCore;
using back_end.Domain;
using System.Collections.ObjectModel;
using System.Numerics;

namespace back_end.Repositories
{
    public class WorkoutAppContext : DbContext
    {
        public WorkoutAppContext(DbContextOptions<WorkoutAppContext> options) : base(options)
        {
          
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<int> firebaseIds = new List<int> { 1, 2, 3, 4, 5 };
            List<string> firstNames = new List<string>
            {
                "FirstName1",
                "FirstName2",
                "FirstName3",
                "FirstName4",
                "FirstName4"
            };
            List<string> middleNames = new List<string>
            {
                "MiddleName1",
                "MiddleName2",
                "MiddleName3",
                "MiddleName4",
                "MiddleName5"
            };
            List<string> lastNames = new List<string>
            {
                "LastName1",
                "LastName2",
                "LastName3",
                "LastName4",
                "LastName5"
            };

            int workoutID = 1;
            int workoutStepID = 1;
            int userID = 1;
            for (int i = 1; i <= firebaseIds.Count(); i++)
            {
                modelBuilder.Entity<User>().HasAlternateKey(p => p.FirebaseID);
                modelBuilder.Entity<User>().HasData(
                        new User { ID = userID++, FirebaseID = $"{firebaseIds[i - 1]}", FirstName = firstNames[i - 1], MiddleName = middleNames[i - 1], LastName = lastNames[i - 1] }
                );

                string title = $"Workout #{i}";
                modelBuilder.Entity<Workout>().HasData(
                        new Workout { ID = workoutID++, FirebaseID = $"{firebaseIds[i - 1] }", Title = title }
                );

                List<int> workoutStepIds = new List<int> { 1, 2, 3, 4, 5 };
                List<int> workoutWorkoutTimes = new List<int> { 1, 2, 3, 4, 5};
                for(int j = 1; j <= workoutStepIds.Count(); j++)
                {
                    string instruction = $"Instruction #{j}";
                    modelBuilder.Entity<Workout>().HasMany(workout => workout.Steps);
                    modelBuilder.Entity<WorkoutStep>().HasData(
                        new WorkoutStep { ID = workoutStepID++, WorkoutID = workoutStepIds[i - 1], Instruction = instruction, WorkoutTime = workoutWorkoutTimes[j - 1] }
                    );
                }
            }
        }

        #region DbSets
        public DbSet<User> Users { get; set; }
        public DbSet<WorkoutStep> WorkoutSteps { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        #endregion
    }
}
