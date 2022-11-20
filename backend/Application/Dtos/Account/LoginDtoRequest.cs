using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Dtos.Account
{
    public class LoginDtoRequest
    {
        public string Login { get; set; } = default!;
        public string Password { get; set; } = default!;
    }
}