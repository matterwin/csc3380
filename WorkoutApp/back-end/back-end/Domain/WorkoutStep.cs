using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Domain
{
    
    public class WorkoutStep : BaseEntity
    {
        public string Instruction { get; set; }
        public int WorkoutTime { get; set; }
        public Workout Workout { get; set; }
        public int WorkoutID { get; set; }
    }
}
