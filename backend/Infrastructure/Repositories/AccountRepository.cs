using Application.Interfaces;
using Persistence;

namespace Infrastructure.Repositories;

public class AccountRepository : IAccountRepository
{
    private readonly DataContext _dataContext;
    public AccountRepository(DataContext dataContext)
    {
        _dataContext = dataContext;
    }
}
