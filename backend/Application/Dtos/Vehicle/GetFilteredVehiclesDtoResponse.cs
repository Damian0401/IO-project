namespace Application.Dtos.Vehicle;

public class GetFilteredVehiclesDtoResponse
{
    public List<VehicleForGetFilteredVehiclesDtoResponse> Vehicles { get; set; } = default!;
}

public class VehicleForGetFilteredVehiclesDtoResponse
{
    public Guid Id { get; set; }
    public string Model { get; set; } = default!;
    public string Status { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
}