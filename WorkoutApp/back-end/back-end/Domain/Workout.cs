using Microsoft.Extensions.Configuration.UserSecrets;
using System.ComponentModel.DataAnnotations.Schema;
using back_end.DTO;

namespace back_end.Domain
{
    public class Workout : BaseEntity
    {
        public string Title { get; set; }
        public ICollection<WorkoutStep> Steps { get; set; }
        public int FirebaseID { get; set; }

        // This if for creating the DTO
        public Workout(int FirebaseID, WorkoutDTO workoutDTO)
        {
            this.FirebaseID = FirebaseID;
            Title = workoutDTO.Title;

            Steps = new List<WorkoutStep>();

            for(int i = 0; i < workoutDTO.Steps.Count; i++)
            {
                Steps.Add(new WorkoutStep(ID, workoutDTO.Steps.ElementAt(i)));
            }
        }

        // Standard get set constructor
        public Workout(string title, ICollection<WorkoutStep> steps, int firebaseID)
        {
            Title = title;
            Steps = steps;
            FirebaseID = firebaseID;
        }

        // This is for creating the seeding data
        public Workout()
        {

        }
    }
}
