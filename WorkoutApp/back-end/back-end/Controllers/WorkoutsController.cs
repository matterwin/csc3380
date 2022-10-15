using AutoMapper;
using back_end.DTO;
using back_end.Repositories;
using back_end.Repositories.IRepositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ControllerBase
    {
        private readonly IWorkoutRepository workoutRepository;
        private readonly IMapper mapper;

        public WorkoutsController(IWorkoutRepository workoutRepository, IMapper mapper)
        {
            this.workoutRepository = workoutRepository;
            this.mapper = mapper;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(WorkoutDTO))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWorkout(int id)
        {
            var result = await workoutRepository.GetWithStepsAsync(id);

            var dto = mapper.Map<WorkoutDTO>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWorkouts()
        {
            var result = await workoutRepository.GetAllWithStepsAsync();
            var dto = mapper.Map<List<WorkoutDTO>>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{start}/{size}")]
        public async Task<IActionResult> GetWorkouts(int start, int size)
        {
            var result = await workoutRepository.GetAllInRangeWithSteps(start, size);
            var dto = mapper.Map<List<WorkoutDTO>>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet("Count")]
        public async Task<IActionResult> GetWorkoutsCount()
        {
            var result = await workoutRepository.GetAllSize();
            return Ok(result);
        }
    }
}