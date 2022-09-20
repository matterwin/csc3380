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
        public List<Workout> Get()
        {

            //THIS IS JUST DUMMY DATA FOR NOW
            //SHOUDL BE QUERYING FROM DATABASE FROM UTILITY FUNCTION
            WorkoutStep step1 = new WorkoutStep("Lay down on the floor", 50);
            WorkoutStep step2 = new WorkoutStep("Do a pushup", 20);

            List<WorkoutStep> list = new List<WorkoutStep>() { step1, step2 };
            Workout workout1 = new Workout(list);

            List<Workout> listWorkout = new List<Workout> { workout1 };
            return listWorkout;
        }
    }
}