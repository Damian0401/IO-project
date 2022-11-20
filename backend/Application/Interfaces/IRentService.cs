using Application.Dtos.Rent;

namespace Application.Interfaces
{
    public interface IRentService
    {
        Guid Create(CreateRentDtoRequest dto);
        bool Issue(Guid id);
        bool Receive(Guid id);
        GetRentByIdDtoResponse? GetById(Guid id);
        GetActiveRentsDtoResponse GetActive();
        GetArchivedRentsDtoResponse GetArchived();
        bool Cancel(Guid id);
    }
}