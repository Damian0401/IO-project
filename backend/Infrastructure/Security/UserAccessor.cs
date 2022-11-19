using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Models;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        public User? GetCurrentlyLoggedUser()
        {
            throw new NotImplementedException();
        }
    }
}