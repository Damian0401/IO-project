using API.Extensions;
using Application.Core;
using Application.Dtos.Account;
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
app.UseCors("CorsPolicy");

app.MapRestEndpoints();

app.UseSwaggerUI();
app.Run();
