using AutoMapper;
using back_end.Domain;

namespace back_end.DTO
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region
            CreateMap<Workout, WorkoutDTO>().ReverseMap();
            CreateMap<WorkoutStep, WorkoutStepDTO>().ReverseMap();
            #endregion
        }
    }
}
