using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.Services;
using Infrastructure.Repositories;
using Infrastructure.Security;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddScoped<IAccountService, AccountService>();
        services.AddScoped<IAccountRepository, AccountRepository>();
        services.AddScoped<IDepartmentService, DepartmentService>();
        services.AddScoped<IDepartmentRepository, DepartmentRepository>();
        services.AddScoped<IJwtGenerator, JwtGenerator>();
        services.AddScoped<IRentService, RentService>();
        services.AddScoped<IRentRepository, RentRepository>();
        services.AddScoped<ISeedRepository, SeedRepository>();
        services.AddScoped<IUserAccessor, UserAccessor>();
        services.AddScoped<IVehicleService, VehicleService>();
        services.AddScoped<IVehicleRepository, VehicleRepository>();
        services.AddHttpContextAccessor();

        return services;
    }
}