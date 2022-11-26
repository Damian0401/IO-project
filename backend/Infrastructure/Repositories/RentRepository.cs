using Application.Interfaces;
using Persistence;

namespace Infrastructure.Repositories;

public class RentRepository : IRentRepository
{
    private readonly DataContext _dataContext;

    public RentRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
}
