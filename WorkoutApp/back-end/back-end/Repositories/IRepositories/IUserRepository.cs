using back_end.Domain;

namespace back_end.Repositories.IRepositories
{
    public interface IUserRepository : IGenericRepository<User>
    {
        public Task<User> GetUserWithFirebaseId(string firebaseId); 
    }
}
