using Microsoft.Extensions.Configuration.UserSecrets;
using System.ComponentModel.DataAnnotations.Schema;
using back_end.DTO;

namespace back_end.Domain
{
    public class Workout : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string WorkoutType { get; set; }
        public ICollection<WorkoutStep> Steps { get; set; }
        public string FirebaseID { get; set; }

        // This if for creating the DTO
        public Workout(string FirebaseID, WorkoutDTO workoutDTO)
        {
            this.FirebaseID = FirebaseID;
            Title = workoutDTO.Title;
            WorkoutType = workoutDTO.WorkoutType;
            Description = workoutDTO.Description;

            Steps = new List<WorkoutStep>();

            for(int i = 0; i < workoutDTO.Steps.Count(); i++)
            {
                Console.WriteLine("TEst");
                Steps.Add(new WorkoutStep(ID, workoutDTO.Steps.ElementAt(i)));
            }
        }

        // Standard get set constructor
        public Workout(string title, string description, string workoutType, ICollection<WorkoutStep> steps, string firebaseID)
        {
            Title = title;
            Description = description;
            WorkoutType = workoutType;
            Steps = steps;
            FirebaseID = firebaseID;
        }

        // This is for creating the seeding data
        public Workout()
        {

        }
    }
}
