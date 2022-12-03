using Application.Constants;
using Application.Interfaces;
using Domain.Models;
using Persistence;

namespace Infrastructure.Repositories;

public class SeedRepository : ISeedRepository
{
    private readonly DataContext _context;
    public SeedRepository(DataContext context)
    {
        _context = context;
    }

    public void SeedFuels()
    {
        if (_context.Fuels.Count() > 0)
            return;

        var fuelsToSeed = new List<Fuel>
        {
            new Fuel
            {
                Type = Fuels.Petrol
            },
            new Fuel
            {
                Type = Fuels.Diesel
            },
            new Fuel
            {
                Type = Fuels.Gas
            },
            new Fuel
            {
                Type = Fuels.Hybrid
            },
        };

        _context.Fuels.AddRange(fuelsToSeed);
        _context.SaveChanges();
    }

    public void SeedRentStatuses()
    {
        if (_context.RentStatuses.Count() > 0)
            return;

        var rentStatusesToSeed = new List<RentStatus>
        {
            new RentStatus
            {
                Name = RentStatuses.Reserved
            },
            new RentStatus
            {
                Name = RentStatuses.Active
            },
            new RentStatus
            {
                Name = RentStatuses.Archived
            },
        };

        _context.RentStatuses.AddRange(rentStatusesToSeed);
        _context.SaveChanges();
    }

    public void SeedRoles()
    {
        if (_context.Roles.Count() > 0)
            return;

        var rolesToSeed = new List<Role>
        {
            new Role
            {
                Name = Roles.Manager
            },
            new Role
            {
                Name = Roles.Employee
            },
            new Role
            {
                Name = Roles.Client
            },
            new Role
            {
                Name = Roles.Unverified
            },
        };

        _context.Roles.AddRange(rolesToSeed);
        _context.SaveChanges();
    }

    public void SeedVehicleStatuses()
    {
        if (_context.VehicleStatuses.Count() > 0)
            return;

        var vehicleStatusesToSeed = new List<VehicleStatus>
        {
            new VehicleStatus
            {
                Name = VehicleStatuses.Available
            },
            new VehicleStatus
            {
                Name = VehicleStatuses.Reserved
            },
            new VehicleStatus
            {
                Name = VehicleStatuses.Rented
            },
            new VehicleStatus
            {
                Name = VehicleStatuses.Unavailable
            },
        };

        _context.VehicleStatuses.AddRange(vehicleStatusesToSeed);
        _context.SaveChanges();
    }
}