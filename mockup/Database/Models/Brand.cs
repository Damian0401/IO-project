using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class Brand
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;

    public ICollection<Model> Models { get; set; } = default!;
}