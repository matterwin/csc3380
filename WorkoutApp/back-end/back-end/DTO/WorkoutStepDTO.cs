using back_end.Domain;
using Newtonsoft.Json;

namespace back_end.DTO
{
    public class WorkoutStepDTO
    {
        public string Instruction { get; set; }
        public int WorkoutTime { get; set; }
    }
}
