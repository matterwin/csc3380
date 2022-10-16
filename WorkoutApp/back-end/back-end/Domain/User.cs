using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Domain
{
    public class User : BaseEntity
    {
        [NotMapped]
        public static readonly List<string> Genders = new List<string> {
            "male",
            "femuale",
            "unspecified"
        };

        public string FirebaseId { get; set; }
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? Gender { get; set; }
        public int? Weight { get; set; }
    }
}
