using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class Vehicle
{
    public Guid Id { get; set; }
    public string Model { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public double PricePerDay { get; set; }
    public int YearOfProduction { get; set; }
    public Guid VehicleStatusId { get; set; }
    public Guid BrandId { get; set; }
    public Guid DepartmentId { get; set; }

    public Department Department { get; set; } = default!;
    public Brand Brand { get; set; } = default!;
    public VehicleStatus VehicleStatus { get; set; } = default!;
    public ICollection<Rent> Rents { get; set; } = default!;
}