using back_end.DTO.WorkoutStep;

namespace back_end.DTO.Workout
{
    public class WorkoutBaseDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string WorkoutType { get; set; }
        public ICollection<WorkoutStepDTO> Steps { get; set; }
    }
}
