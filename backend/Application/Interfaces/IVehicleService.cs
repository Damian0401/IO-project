using Application.Dtos.Vehicle;

namespace Application.Interfaces
{
    public interface IVehicleService
    {
        GetVehiclesDtoResponse GetFiltered(GetVehiclesDtoRequest dto);
        GetVehicleByIdDtoResponse GetById(Guid id);
        bool Update(Guid id, UpdateVehicleDtoRequest dto); 
        bool Delete(Guid id);
        Guid Create(CreateVehicleDtoRequest dto);
    }
}