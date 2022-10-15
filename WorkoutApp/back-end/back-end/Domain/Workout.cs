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
    }
}
