using back_end.Repositories.IRepositories;
using back_end.Domain;
using Microsoft.EntityFrameworkCore;

namespace back_end.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        private readonly DbContext dbContext;

        public UserRepository(WorkoutAppContext dbContext) : base(dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<User> GetUserWithFirebaseId(string firebaseId)
        {
            var result = await dbContext.Set<User>().Where(user => user.FirebaseId == firebaseId).FirstOrDefaultAsync();
            return result;
        }
    }
}
