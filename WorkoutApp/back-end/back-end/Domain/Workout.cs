namespace back_end.Domain
{
    public class Workout
    {
        public string title { get; set; }
        public List<WorkoutStep> steps { get; set; }

        public Workout(List<WorkoutStep> steps, string title)
        {
            this.steps = steps;
            this.title = title;
        }
    }
}
