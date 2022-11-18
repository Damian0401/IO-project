using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class Localization
{
    public Guid Id { get; set; }
    public double XPosition { get; set; }
    public double YPosition { get; set; }

    public Department Department { get; set; } = default!;
}