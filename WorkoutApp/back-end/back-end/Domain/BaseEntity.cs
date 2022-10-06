using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class BaseEntity
{
    [Key]
    public int ID { get; set; }
}