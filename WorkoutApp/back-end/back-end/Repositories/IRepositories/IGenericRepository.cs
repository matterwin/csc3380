namespace back_end.Repositories.IRepositories
{
    public interface IGenericRepository<T>
    {
        public Task<T> GetAsync(int id);
        public Task<ICollection<T>> GetAllAsync();
        public Task<T> AddAsync(T entity);
        public Task<T> UpdateAsync(T entity);
        public Task DeleteAsync(T entity);
    }
}
