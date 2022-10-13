using back_end.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilterController : Controller
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<string>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("WorkoutTypes")]
        public IActionResult Get()
        {
            List<string> workoutTypes = new List<string>();

            workoutTypes.Add("all");
            workoutTypes.Add("arms");
            workoutTypes.Add("legs");
            workoutTypes.Add("chest");

            return Ok(workoutTypes);
        }
    }
}
