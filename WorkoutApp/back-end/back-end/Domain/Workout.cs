using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Domain
{
    public class Workout : BaseEntity
    {
        [NotMapped]
        public static readonly List<string> WorkoutTypes = new List<string>
        {
            "chest",
            "back",
            "arms",
            "core",
            "legs",
            "cardio"
        };

        public string Title { get; set; }
        public string Description { get; set; }
        public string WorkoutType { get; set; }
        public ICollection<WorkoutStep> Steps { get; set; }
        public string FirebaseId { get; set; }
    }
}
