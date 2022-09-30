using back_end.Domain;
using Newtonsoft.Json;

namespace back_end.DTO
{
    public class WorkoutStepDTO
    {
        public string Instruction { get; set; }
        public int WorkoutTime { get; set; }

        public WorkoutStepDTO(WorkoutStep step)
        {
            Instruction = step.Instruction;
            WorkoutTime = step.WorkoutTime;
        }

        [JsonConstructor]
        public WorkoutStepDTO(string Instruction, int WorkoutTime)
        {
            this.WorkoutTime = WorkoutTime;
            this.Instruction = Instruction;
        }
    }
}
