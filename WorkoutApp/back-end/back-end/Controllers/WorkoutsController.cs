using back_end.Domain;
using back_end.DTO;
using Microsoft.AspNetCore.Mvc;
using back_end.Repositories;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ControllerBase{
        private readonly ILogger<WorkoutsController> _logger;
        private WorkoutAppContext _context;

        public WorkoutsController(ILogger<WorkoutsController> logger, WorkoutAppContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var workouts = _context.Workouts.Where(p => p.ID <= 5 && p.ID > 0).ToList();
            List<WorkoutDTO> workoutDTOs = new List<WorkoutDTO>();

            for(int i = 0; i < workouts.Count(); i++)
            {
                workoutDTOs.Add(new WorkoutDTO(workouts[i]));
            }

            return Ok(workoutDTOs);
        }
    }
}