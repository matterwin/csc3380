using back_end.Domain;
using back_end.DTO;
using back_end.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserWorkoutsController : ControllerBase
    {
        private readonly ILogger<WorkoutsController> _logger;
        private WorkoutAppContext _context;

        public UserWorkoutsController(ILogger<WorkoutsController> logger, WorkoutAppContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpDelete]
        public IActionResult Delete(int FirebaseID, int WorkoutID)
        {
            _context.Remove<Workout>(new Workout { FirebaseID = FirebaseID, ID = WorkoutID});
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{FirebaseID}")]
        public IActionResult Get(int FirebaseID)
        {
            var workouts = _context.Workouts.Include(workout => workout.Steps).Where(workout => workout.FirebaseID == FirebaseID).ToArray();

            if(workouts.Length == 0)
                return NotFound();

            List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();
            for (int i = 0; i < workouts.Count(); i++)
                workoutDTOs.Add(new WorkoutDTO(workouts.ElementAt(i)));

            return Ok(workoutDTOs);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(int))]
        [Route("{FirebaseID}")]
        public IActionResult Post(int FirebaseID, [FromBody] WorkoutDTO workoutDTO)
        {
            Workout workout = new Workout(FirebaseID, workoutDTO);
            _context.Workouts.Add(workout);
            _context.SaveChanges();
            return Ok(FirebaseID);

        }
    }
}