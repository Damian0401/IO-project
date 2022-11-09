using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class Department
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string Localisation { get; set; } = default!;
    public Guid? ManagerId { get; set; }

    public User Manager { get; set; } = default!;
    public ICollection<Vehicle> Vehicles { get; set; } = default!;
    public ICollection<User> Employees { get; set; } = default!;

}