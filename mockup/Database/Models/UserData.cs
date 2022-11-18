namespace Database.Models;

public class UserData
{
    public Guid Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public int Pesel { get; set; }
    public int PhoneNumber { get; set; }
    public Guid AddressId { get; set; }

    public User User { get; set; } = default!;
    public Address Address { get; set; } = default!;
}