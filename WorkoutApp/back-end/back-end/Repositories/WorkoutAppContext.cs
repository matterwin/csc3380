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
            List<int> workoutIds = new List<int> { 1, 2, 3, 4, 5 };

            for(int i = 1; i <= workoutIds.Count(); i++)
            {
                string title = $"Workout #{i}"; 
                modelBuilder.Entity<Workout>().HasData(
                        new Workout { ID = workoutIds[i - 1], Title = title }
                    );

                List<int> workoutStepIds = new List<int> { 1, 2, 3, 4, 5 };
                for(int j = 1; j <= workoutStepIds.Count(); j++)
                {
                    string instruction = $"Instruction #{j}";
                    modelBuilder.Entity<Workout>().OwnsMany(workout => workout.Steps).HasData(
                        new WorkoutStep { ID = workoutStepIds[j - 1], WorkoutID = workoutIds[i - 1], Instruction = instruction }
                    );
                }
            }
        }

        #region DbSets
        public DbSet<WorkoutStep> WorkoutSteps { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        #endregion
    }
}
