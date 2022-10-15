using back_end.Repositories.IRepositories;
using back_end.Domain;
using Microsoft.EntityFrameworkCore;

namespace back_end.Repositories
{
    public class WorkoutRepository : GenericRepository<Workout>, IWorkoutRepository
    {
        private readonly DbContext dbContext;

        public WorkoutRepository(WorkoutAppContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<List<Workout>> GetAllWithStepsAsync()
        {
            var result = await dbContext.Set<Workout>()
                                        .Include(workout => workout.Steps)
                                        .ToListAsync();
            return result;
        }

        public async Task<Workout> GetWithStepsAsync(int id)
        {
            var result = await dbContext.Set<Workout>()
                                        .Where(workout => workout.Id == id)
                                        .Include(workout => workout.Steps)
                                        .FirstOrDefaultAsync();
            return result;
        }
    }
}
