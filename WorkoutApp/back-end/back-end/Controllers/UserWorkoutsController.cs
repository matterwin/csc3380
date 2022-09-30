using back_end.Domain;
using back_end.DTO;
using back_end.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.Design;
using System.Runtime.CompilerServices;

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
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("{FirebaseID}/{WorkoutID}")]
        public IActionResult Delete(string FirebaseID, int WorkoutID)
        {
            var workouts = _context.Workouts.Where(workout => workout.FirebaseID == FirebaseID).Where(workout => workout.FirebaseID == FirebaseID);
            if(workouts.Count() <= 0)
                return NotFound(WorkoutID);
            else if(workouts.Count() > 1)
            {
                _logger.LogError("more than one workout found for id");
                return StatusCode(500);
            }

            _context.Remove<Workout>(new Workout { FirebaseID = FirebaseID, ID = WorkoutID});
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{FirebaseID}")]
        public IActionResult Get(string FirebaseID)
        {
            var workouts = _context.Workouts.Include(workout => workout.Steps).Where(workout => workout.FirebaseID == FirebaseID).ToArray();

            if (workouts.Count() != 0)
            {
                Console.WriteLine("TEST");
                List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();
                for (int i = 0; i < workouts.Count(); i++)
                    workoutDTOs.Add(new WorkoutDTO(workouts.ElementAt(i)));

                return Ok(workoutDTOs);
            }

            return NotFound();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(int))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("Update/{FirebaseID}/{WorkoutID}")]
        public IActionResult Put(string FirebaseID, int WorkoutID,  [FromBody] WorkoutDTO workoutDTO)
        {
            var workout = _context.Workouts.Include(workout => workout.Steps).Where(workout => workout.ID == WorkoutID).Where(workout => workout.FirebaseID == FirebaseID).FirstOrDefault();

            if(workout != null)
            {
                workout.Title = workoutDTO.Title;
                workout.Steps.Clear();

                foreach(WorkoutStepDTO step in workoutDTO.Steps)
                    workout.Steps.Add(new WorkoutStep(WorkoutID, step));

                _context.Workouts.Update(workout);
                _context.SaveChanges();
                return Ok(workout);
            }

            return NotFound();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Route("{FirebaseID}")]
        public IActionResult Post(string FirebaseID, [FromBody] WorkoutDTO workoutDTO)
        {
            Workout workout = new Workout(FirebaseID, workoutDTO);
            _context.Workouts.Add(workout);
            _context.SaveChanges();
            return Ok();

        }
    }
}