using back_end.DTO.User;
using back_end.DTO.Workout;
using back_end.DTO.WorkoutStep;

namespace back_end.DTO.Profile
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            #region workouts
            CreateMap<Domain.Workout, WorkoutBaseDTO>().ReverseMap();
            CreateMap<Domain.Workout, PostWorkoutDTO>().ReverseMap();
            CreateMap<Domain.Workout, PutWorkoutDTO>().ReverseMap();
            CreateMap<Domain.Workout, GetWorkoutDTO>().ReverseMap();
            #endregion

            #region workout_steps
            CreateMap<Domain.WorkoutStep, WorkoutStepDTO>().ReverseMap();
            #endregion

            #region users
            CreateMap<Domain.User, UserBaseDTO>().ReverseMap();
            CreateMap<Domain.User, GetUserDTO>().ReverseMap();
            CreateMap<Domain.User, PutUserDTO>().ReverseMap();
            CreateMap<Domain.User, PostUserDTO>().ReverseMap();
            #endregion
        }
    }
}
