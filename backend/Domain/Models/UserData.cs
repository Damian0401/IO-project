namespace Domain.Models;

public class UserData
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public int Pesel { get; set; }
    public string PhoneNumber { get; set; } = default!;
    public string Email { get; set; } = default!;
    public Guid AddressId { get; set; }

    public List<User> Users { get; set; } = default!;
    public Address Address { get; set; } = default!;
}