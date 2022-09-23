using back_end.Domain;

namespace back_end.DTO
{
    public class WorkoutStepDTO
    {
        public string Instruction { get; set; }
        public int WorkoutTime { get; set; }

        public WorkoutStepDTO(WorkoutStep step)
        {
            this.Instruction = step.Instruction;
            this.WorkoutTime = step.WorkoutTime;
        }
    }
}
