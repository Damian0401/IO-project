using API.Extensions;
using Application.Core;
using Application.Dtos.Vehicle;
using Application.Interfaces;
using Application.Services;
using Microsoft.AspNetCore.Mvc;
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

builder.Services.AddCors(options => 
{
    options.AddPolicy("CorsPolicy", opt =>
        opt.AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin());
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

app.MapGet("/api/v1/vehicle/filters", (IVehicleService service) =>
{
    var data = service.GetVehicleFilterData();

    return Results.Ok(data);
});

app.MapPost("/api/v1/vehicle", ([FromBody] CreateVehicleDtoRequest dto, IVehicleService service) =>
{
    var isSuccess = service.CreateVehicle(dto);

    return isSuccess
    ? Results.NoContent()
    : Results.BadRequest();
});

app.MapGet("/api/v1/vehicle", (GetFilteredVehiclesDtoRequest dto, IVehicleService service) =>
{
    var response = service.GetFilteredVehicles(dto);

    return Results.Ok(response);
});

app.MapGet("/api/v1/vehicle/{id:guid}", ([FromRoute] Guid id, IVehicleService service) =>
{
    var response = service.GetVehicleById(id);

    if (response is null)
        return Results.NotFound();

    return Results.Ok(response);
});

app.MapGet("/api/v1/department", (IDepartmentService service) =>
{
    var response = service.GetAllDepartments();

    return Results.Ok(response);
});

app.MapGet("/api/v1/department/{id:guid}", (Guid id, IDepartmentService service) =>
{
    var response = service.GetDepartmentById(id);

    if (response is null)
        return Results.NotFound();

    return Results.Ok(response);
});

app.UseSwaggerUI();
app.Run();
