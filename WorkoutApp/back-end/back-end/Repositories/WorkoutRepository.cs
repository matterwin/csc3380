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

        public async Task<Workout> GetWithStepsAsync(int Id)
        {
            var result = await dbContext.Set<Workout>()
                                        .Where(workout => workout.Id == Id)
                                        .Include(workout => workout.Steps)
                                        .FirstOrDefaultAsync();
            return result;
        }

        public async Task<int> GetAllSize()
        {
            var result = await dbContext.Set<Workout>().CountAsync();
            return result;
        }

        public async Task<List<Workout>> GetAllInRangeWithSteps(int start, int size)
        {
            var result = await dbContext.Set<Workout>()
                                        .Skip((start - 1) * size)
                                        .Take(size)
                                        .Include(workout => workout.Steps)
                                        .ToListAsync();
            return result;
        }

        public async Task<List<Workout>> GetAllWithFirebaseIdWithStepsAsync(string FirebaseId)
        {
            var result = await dbContext.Set<Workout>()
                                        .Where(workout => workout.FirebaseId == FirebaseId)
                                        .Include(workout => workout.Steps)
                                        .ToListAsync();
            return result;
        }
    }
}
