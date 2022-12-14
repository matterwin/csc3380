using back_end.Domain;

namespace back_end.Repositories.IRepositories
{
    public interface IWorkoutRepository : IGenericRepository<Workout>
    {
        public Task<List<Workout>> GetAllWithStepsAsync();
        public Task<Workout> GetWithStepsAsync(int id);
        public Task<int> GetAllSize();
        public Task<List<Workout>> GetAllInRangeWithSteps(int start, int size);
        public Task<List<Workout>> GetAllWithFirebaseIdWithStepsAsync(string firebaseId);
        public Task<List<Workout>> GetAllWithStepsWithWorkoutTypeAsync(string workoutType);
    }
}
