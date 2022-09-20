using back_end.Domain;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ControllerBase{
        private readonly ILogger<WorkoutsController> _logger;

        public WorkoutsController(ILogger<WorkoutsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {

            //THIS IS JUST DUMMY DATA FOR NOW
            //SHOUDL BE QUERYING FROM DATABASE FROM UTILITY FUNCTION
            List<WorkoutStep> list1 = new List<WorkoutStep>() { 
                new WorkoutStep("10 pushups", 4), 
                new WorkoutStep("60 situps", 4) 
            };

            List<WorkoutStep> list2 = new List<WorkoutStep>() {
                new WorkoutStep("4x10 curls", 20),
                new WorkoutStep("4x10 bench", 20)
            };

            Workout workout1 = new Workout(list1, "Example Workout 1");
            Workout workout2 = new Workout(list2, "Example Workout 2");

            List<Workout> listWorkout = new List<Workout> { workout1, workout2 };
            return Ok(listWorkout);
        }
    }
}