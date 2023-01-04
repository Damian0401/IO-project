using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Application.Services;
using Infrastructure.Repositories;
using Infrastructure.Security;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services,
            IConfiguration configuration)
    {
        services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);

        services.AddScoped<IAccountService, AccountService>();
        services.AddScoped<IDepartmentService, DepartmentService>();
        services.AddScoped<IRentService, RentService>();
        services.AddScoped<IVehicleService, VehicleService>();

        services.AddScoped<IAccountRepository, AccountRepository>();
        services.AddScoped<IDepartmentRepository, DepartmentRepository>();
        services.AddScoped<IRentRepository, RentRepository>();
        services.AddScoped<ISeedRepository, SeedRepository>();
        services.AddScoped<IVehicleRepository, VehicleRepository>();

        services.AddHttpContextAccessor();

        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });

        return services;
    }
}