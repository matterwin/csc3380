using AutoMapper;
using back_end.Domain;
using back_end.DTO.Workout;
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
        private readonly IWorkoutRepository workoutRepository;
        private readonly IMapper mapper;

        public UserWorkoutsController(IWorkoutRepository workoutRepository, IMapper mapper)
        {
            this.workoutRepository = workoutRepository;
            this.mapper = mapper;
        }

        [HttpDelete("{Id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteUserWorkout(int Id)
        {
            var existingResult = await workoutRepository.GetAsync(Id);

            if (existingResult != null)
            {
                await workoutRepository.DeleteAsync(existingResult);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WorkoutBaseDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{FirebaseID}")]
        public async Task<IActionResult> GetUserWorkouts(string FirebaseID)
        {
            var result = await workoutRepository.GetAllWithFirebaseIdWithStepsAsync(FirebaseID);
            var dto = mapper.Map<List<WorkoutBaseDTO>>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(int))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{Id}")]
        public async Task<IActionResult> PutUserWorkouts(int Id,  [FromBody] PutWorkoutDTO workoutDTO)
        {
            var existingResult = await workoutRepository.GetWithStepsAsync(Id);

            if (existingResult != null)
            {
                mapper.Map(workoutDTO, existingResult);
                await workoutRepository.UpdateAsync(existingResult);
                return Ok(existingResult.Id);
            }
            else
                return NotFound();
        }

        [HttpPost("{FirebaseId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Post(string FirebaseId, [FromBody] PostWorkoutDTO workoutDTO)
        {
            var result = mapper.Map<Workout>(workoutDTO);
            result.FirebaseId = FirebaseId;
            await workoutRepository.AddAsync(result);
            return Ok(result.Id);
        }
    }
}