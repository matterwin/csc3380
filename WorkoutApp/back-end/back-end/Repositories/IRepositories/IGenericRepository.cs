namespace back_end.Repositories.IRepositories
{
    public interface IGenericRepository<T>
    {
        public Task<T> GetAsync(int id);
        public Task<ICollection<T>> GetAllAsync();
    }
}
