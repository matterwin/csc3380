using back_end.Repositories.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace back_end.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T: class
    {
        private readonly DbContext dbContext;

        public GenericRepository(WorkoutAppContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<T> GetAsync(int id)
        {
            var result = await dbContext.FindAsync<T>(id);
            return result;
        }

        public async Task<ICollection<T>> GetAllAsync()
        {
            var result = await dbContext.Set<T>().ToListAsync();
            return result;
        }
    }
}
