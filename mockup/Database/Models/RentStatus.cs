using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class RentStatus
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;

    public ICollection<Rent> Rents { get; set; } = default!;
}