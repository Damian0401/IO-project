using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Account;
using Application.Interfaces;

namespace Application.Services
{
    public class AccountService : IAccountService
    {
        public LoginDtoResponse Login(LoginDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public RegisterDtoResponse Register(RegisterDtoRequest dto)
        {
            throw new NotImplementedException();
        }
    }
}