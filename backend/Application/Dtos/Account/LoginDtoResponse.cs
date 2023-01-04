using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Dtos.Account
{
    public class LoginDtoResponse
    {
        public string Login { get; set; } = default!;
        public string Token { get; set; } = default!;
        public string Role { get; set; } = default!;
    }
}