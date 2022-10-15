using back_end.Domain;

namespace back_end.Repositories.IRepositories
{
    public interface IWorkoutRepository : IGenericRepository<Workout>
    {
        public Task<List<Workout>> GetAllWithStepsAsync();
        public Task<Workout> GetWithStepsAsync(int id);
    }
}
