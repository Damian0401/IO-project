using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Models;

public class Rent
{
    public Guid Id { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public Guid RentStatusId { get; set; }
    public Guid? UserId { get; set; }
    public Guid? VehicleId { get; set; }

    public Vehicle Vehicle { get; set; } = default!;
    public RentStatus RestStatus { get; set; } = default!;
    public User User { get; set; } = default!;
}