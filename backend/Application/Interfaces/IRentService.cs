using Application.Dtos.Rent;

namespace Application.Interfaces
{
    public interface IRentService
    {
        Guid CreateRent(CreateRentDtoRequest dto);
        bool IssueRent(Guid id);
        bool ReceiveRent(Guid id);
        GetRentByIdDtoResponse? GetRentById(Guid id);
        GetActiveRentsDtoResponse GetActiveRents();
        GetArchivedRentsDtoResponse GetArchivedRents();
        bool CancelRent(Guid id);
    }
}