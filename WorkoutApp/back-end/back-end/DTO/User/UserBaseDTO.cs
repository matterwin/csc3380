namespace back_end.DTO.User
{
    public class UserBaseDTO
    {
        public string? FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string? LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? Gender { get; set; }
        public int? Weight { get; set; }
    }
}
