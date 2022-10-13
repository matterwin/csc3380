using back_end.DTO;
using back_end.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(WorkoutDTO))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Route("{id}")]
        public IActionResult GetWorkout(int id)
        {
            if (id <= 0)
                return BadRequest();

            var workout = _context.Workouts.Include(workout => workout.Steps).Where((workout) => workout.ID == id).ToList();
            new WorkoutDTO(workout[0]);

            if (workout != null)
                return Ok(new WorkoutDTO(workout[0]));
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetWorkouts()
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


        // NOTE::start id is indexed starting at 1
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("{start}/{size}")]
        public IActionResult GetWorkouts(int start, int size)
        {
            var workouts = _context.Workouts.Include(workout => workout.Steps).Skip((start - 1) * size).Take(size).ToList();

            List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();
            for (int i = 0; i < workouts.Count(); i++)
            {
                workoutDTOs.Add(new WorkoutDTO(workouts[i]));
            }

            return Ok(workoutDTOs);
        }

        [HttpGet]
        [Route("Count")]
        public IActionResult GetWorkoutsCount()
        {
            var numWorkouts = _context.Workouts.Count();
            return Ok(numWorkouts);
        }
    }
}