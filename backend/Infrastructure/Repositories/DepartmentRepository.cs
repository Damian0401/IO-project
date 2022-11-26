using Application.Interfaces;
using Persistence;

namespace Infrastructure.Repositories;

public class DepartmentRepository : IDepartmentRepository
{
    private readonly DataContext _dataContext;

    public DepartmentRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
}
