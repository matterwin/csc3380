using AutoMapper;
using back_end.DTO.Workout;
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

        #region workouts
        [HttpGet("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GetWorkoutDTO))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetWorkout(int Id)
        {
            var result = await workoutRepository.GetWithStepsAsync(Id);

            var dto = mapper.Map<GetWorkoutDTO>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<GetWorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAllWorkouts()
        {
            var result = await workoutRepository.GetAllWithStepsAsync();
            var dto = mapper.Map<List<GetWorkoutDTO>>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<GetWorkoutDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{Start}/{Size}")]
        public async Task<IActionResult> GetWorkoutsInRange(int Start, int Size)
        {
            var result = await workoutRepository.GetAllInRangeWithSteps(Start, Size);
            var dto = mapper.Map<List<GetWorkoutDTO>>(result);

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
        #endregion
    }
}