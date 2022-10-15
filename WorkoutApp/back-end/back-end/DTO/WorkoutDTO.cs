using back_end.Domain;
using Newtonsoft.Json;

namespace back_end.DTO
{
    public class WorkoutDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string WorkoutType { get; set; }
        public ICollection<WorkoutStepDTO> Steps { get; set; }
    }
}
