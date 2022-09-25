namespace back_end.Domain
{
    public class User : BaseEntity
    {
        public int FirebaseID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
    }
}
