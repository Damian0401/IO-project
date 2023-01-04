using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IAccountRepository
    {
        bool IsEmailAvailable(string email);
        bool IsPeselAvailable(int pesel);
        bool IsPhoneNumberAvailable(string phoneNumber);
        bool IsLoginsAvailable(string login);
        bool CreateUser(User user);
        User? GetUserByLogin(string login);
        Role GetRoleByName(string roleName);
    }
}