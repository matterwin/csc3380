using System.ComponentModel.DataAnnotations.Schema;
using back_end.DTO;

namespace back_end.Domain
{

    public class WorkoutStep : BaseEntity
    {
        public string Instruction { get; set; }
        public int WorkoutTime { get; set; }
        public Workout Workout { get; set; }
        public int WorkoutID { get; set; }

        // This is for 
        public WorkoutStep(int WorkoutID, WorkoutStepDTO workoutStepDTO)
        {
            this.Instruction = workoutStepDTO.Instruction;
            this.WorkoutTime = workoutStepDTO.WorkoutTime;
            this.WorkoutID = WorkoutID;
        }

        // This is just a standard constructor
        public WorkoutStep(string instruction, int workoutTime, Workout workout, int workoutID)
        {
            Instruction = instruction;
            WorkoutTime = workoutTime;
            Workout = workout;
            WorkoutID = workoutID;
        }

        // This is for seedin the data
        public WorkoutStep()
        {

        }
    }
}
