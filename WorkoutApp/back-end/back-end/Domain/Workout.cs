namespace back_end.Domain
{
    public class Workout : BaseEntity
    {
        public string Title { get; set; }
        public ICollection<WorkoutStep> Steps { get; set; }
    }
}
