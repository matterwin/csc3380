using back_end.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using back_end.Repositories.IRepositories;
using back_end.Domain;
using back_end.DTO;
using AutoMapper;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// configure ef

builder.Services.AddDbContext<WorkoutAppContext>(
            options => options.UseSqlServer("name=ConnectionStrings:DefaultConnection"));

builder.Services.AddControllers().AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);

// Add service to enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy => policy.AllowAnyOrigin()
                                                    .AllowAnyMethod()
                                                    .AllowAnyHeader());
});

// TODO:put this in its own file
//new MapperConfiguration(cfg => cfg.CreateMap<Workout, WorkoutDTO>().ReverseMap().DisableCtorValidation());
//new MapperConfiguration(cfg => cfg.CreateMap<ICollection<Workout>, ICollection<WorkoutDTO>>().ReverseMap().DisableCtorValidation());

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

// TODO::put this in its own file
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddScoped<IWorkoutRepository, WorkoutRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors("CorsPolicy");

app.Run();
