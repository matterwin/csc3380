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
        }

        #region DbSets
        public DbSet<User> Users { get; set; }
        public DbSet<WorkoutStep> WorkoutSteps { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        #endregion
    }
}
