using AutoMapper;
using back_end.Domain;
using back_end.DTO.User;
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
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        [HttpDelete("{Id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteUser(int Id)
        {
            var existingUser = await userRepository.GetAsync(Id);

            if (existingUser != null)
            {
                await userRepository.DeleteAsync(existingUser);
                return Ok();
            }
            else
                return NotFound();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<GetUserDTO>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetUsers()
        {
            var result = await userRepository.GetAllAsync();
            var dto = mapper.Map<List<GetUserDTO>>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpGet("{FirebaseId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(GetUserDTO))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetUsers(string FirebaseId)
        {
            var result = await userRepository.GetUserWithFirebaseId(FirebaseId);
            var dto = mapper.Map<GetUserDTO>(result);

            if (result != null)
                return Ok(dto);
            else
                return NotFound();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(int))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("{Id}")]
        public async Task<IActionResult> PutUser(int Id, [FromBody] PutUserDTO putUserDTO)
        {
            var existingUser = await userRepository.GetAsync(Id);

            if (existingUser != null)
            {
                mapper.Map(putUserDTO, existingUser);
                await userRepository.UpdateAsync(existingUser);
                return Ok(existingUser.Id);
            }
            else
                return NotFound();
        }

        [HttpPost("{FirebaseId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> PostUser(string FirebaseId, [FromBody] PostUserDTO postUserDTO)
        {
            var user = new Domain.User();
            mapper.Map(postUserDTO, user);

            // setting the fire base id
            user.FirebaseId = FirebaseId;

            var result = await userRepository.AddAsync(user);

            return Ok(result.Id);
        }

        [HttpGet("Genders")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetUserGenders()
        {
            return Ok(Domain.User.Genders);
        }
    }
}