namespace back_end.Domain
{
    public class Workout
    {
        public List<WorkoutStep> steps { get; set; }

        public Workout(List<WorkoutStep> steps)
        {
            this.steps = steps;
        }
    }
}
