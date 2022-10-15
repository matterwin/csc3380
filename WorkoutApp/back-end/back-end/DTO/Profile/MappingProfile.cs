using back_end.DTO.Workout;
using back_end.DTO.WorkoutStep;

namespace back_end.DTO.Profile
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            #region
            CreateMap<Domain.Workout, WorkoutBaseDTO>().ReverseMap();
            CreateMap<Domain.Workout, PostWorkoutDTO>().ReverseMap();
            CreateMap<Domain.Workout, PutWorkoutDTO>().ReverseMap();
            CreateMap<Domain.Workout, GetWorkoutDTO>().ReverseMap();
            CreateMap<Domain.WorkoutStep, WorkoutStepDTO>().ReverseMap();
            #endregion
        }
    }
}
