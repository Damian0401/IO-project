using API.Extensions;
using Application.Core;
using Application.Interfaces;
using Application.Services;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
builder.Services.AddApplicationServices();

builder.Services.AddDbContext<DataContext>(opt => 
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();
app.UseSwagger();

app.MapGet("/", () => "Hello World!");

app.MapPost("/seed", (ISeedRepository seedRepository) =>
{
    seedRepository.SeedRoles();
    seedRepository.SeedFuels();
    seedRepository.SeedVehicleStatuses();
    seedRepository.SeedRentStatuses();

    return Results.Ok();
});

app.UseSwaggerUI();
app.Run();
