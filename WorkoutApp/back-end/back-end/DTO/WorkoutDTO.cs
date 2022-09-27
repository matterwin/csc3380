using back_end.Domain;

namespace back_end.DTO
{
    public class WorkoutDTO
    {
        public readonly String Title;
        public readonly ICollection<WorkoutStepDTO> Steps = new List<WorkoutStepDTO>();

        public WorkoutDTO(Workout workout)
        {
            this.Title = workout.Title;

            foreach (var step in workout.Steps)
                Steps.Add(new WorkoutStepDTO(step));
        }
    }
}
