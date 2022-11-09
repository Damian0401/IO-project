using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class VehicleStatus
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;

    public ICollection<Vehicle> Vehicles { get; set; } = default!;
}