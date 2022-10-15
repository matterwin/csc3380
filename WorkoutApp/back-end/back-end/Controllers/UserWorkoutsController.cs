using back_end.Domain;
using back_end.DTO;
using back_end.Repositories;
using back_end.Repositories.IRepositories;
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
            return null;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{FirebaseID}")]
        public IActionResult Get(string FirebaseID)
        {
            return null;
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(int))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("Update/{FirebaseID}/{WorkoutID}")]
        public IActionResult Put(string FirebaseID, int WorkoutID,  [FromBody] WorkoutDTO workoutDTO)
        {
            return null;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Route("{FirebaseID}")]
        public IActionResult Post(string FirebaseID, [FromBody] WorkoutDTO workoutDTO)
        {
            return null;
        }

        // NOTE::start id is indexed starting at 1
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [Route("{FirebaseID}/{start}/{size}")]
        public IActionResult GetWorkouts(string FirebaseID, int start, int size)
        {
            return null;
        }


        [HttpGet]
        [Route("Count/{FirebaseID}")]
        public IActionResult GetWorkoutsCount(string FirebaseID)
        {
            return null;
        }
    }
}