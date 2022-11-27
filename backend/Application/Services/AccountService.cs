using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Account;
using Application.Interfaces;
using AutoMapper;

namespace Application.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper __mapper;

        public AccountService(IAccountRepository accountRepository, IMapper _mapper)
        {
            __mapper = _mapper;
            _accountRepository = accountRepository;
        }
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