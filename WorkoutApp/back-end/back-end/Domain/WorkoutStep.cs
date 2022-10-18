using System.ComponentModel.DataAnnotations.Schema;
using back_end.DTO;

namespace back_end.Domain
{

    public class WorkoutStep : BaseEntity
    {
        public string Instruction { get; set; }
        public string? Unit { get; set; }
        public Workout Workout { get; set; }
    }
}
