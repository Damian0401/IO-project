using Application.Interfaces;
using Persistence;

namespace Infrastructure.Repositories;

public class VehicleRepository : IVehicleRepository
{
    private readonly DataContext _dataContext;

    public VehicleRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
}
