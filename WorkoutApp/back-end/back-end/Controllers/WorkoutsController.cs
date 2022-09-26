using back_end.DTO;
using back_end.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ControllerBase
    {
        private readonly ILogger<WorkoutsController> _logger;
        private WorkoutAppContext _context;

        public WorkoutsController(ILogger<WorkoutsController> logger, WorkoutAppContext context)
        {
            _logger = logger;
            _context = context;
        }


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Route("InRange/{start}/{end}")]
        public IActionResult GetInRange(int start, int end)
        {
            if (start > end)
                return BadRequest();

            var workouts = _context.Workouts.Include(workout => workout.Steps).Where(p => p.ID >= start && p.ID <= end).ToList();
            List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();

            for (int i = 0; i < workouts.Count(); i++)
            {
                workoutDTOs.Add(new WorkoutDTO(workouts[i]));
            }

            return Ok(workoutDTOs);
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Get()
        {
            var workouts = _context.Workouts.Include(workout => workout.Steps).ToList();
            List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();

            //if no workouts queries then something is seriously wrong
            //just throw internal server error
            if (workouts.Count <= 0)
                return StatusCode(500);

            for (int i = 0; i < workouts.Count(); i++)
            {
                workoutDTOs.Add(new WorkoutDTO(workouts[i]));
            }

            return Ok(workoutDTOs);
        }
    }
}