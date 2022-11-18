using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public int Pesel { get; set; }
    public string Address { get; set; } = default!;
    public int PhoneNumber { get; set; }
    public string Email { get; set; } = default!;
    public Guid? DepartmentId { get; set; } 
    public Guid RoleId { get; set; }
    public Guid UserDataId { get; set; }

    public UserData UserData { get; set; } = default!;
    public Role Role { get; set; } = default!;
    public Department Department { get; set; } = default!;
    public ICollection<Rent> OwnRentings { get; set; } = default!;
    public ICollection<Rent> IssuedRentings { get; set; } = default!;
    public ICollection<Rent> RecievedRentings { get; set; } = default!;
    public ICollection<Department> OwnedDepartments { get; set; } = default!;
}