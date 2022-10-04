using back_end.Domain;
using Newtonsoft.Json;

namespace back_end.DTO
{
    public class WorkoutDTO
    {
        public String Title { get; set; }
        public String Description { get; set; }
        public ICollection<WorkoutStepDTO> Steps { get; set; }
        public int WorkoutID { get; }

        public WorkoutDTO(Workout workout)
        {
            Title = workout.Title;
            Description = workout.Description;
            WorkoutID = workout.ID;

            Steps = new List<WorkoutStepDTO>();
            foreach (var step in workout.Steps)
            {
                Steps.Add(new WorkoutStepDTO(step));
            }
        }

        [JsonConstructor]
        public WorkoutDTO(string Title, string Description, ICollection<WorkoutStepDTO> Steps, int WorkoutID)
        {
            this.Title = Title;
            this.Description = Description;
            this.Steps = Steps;
            this.WorkoutID = WorkoutID;
        }
    }
}
