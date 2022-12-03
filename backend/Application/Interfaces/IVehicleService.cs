using Application.Dtos.Vehicle;

namespace Application.Interfaces
{
    public interface IVehicleService
    {
        GetFilteredVehiclesDtoResponse GetFiltered(GetFilteredVehiclesDtoRequest dto);
        GetVehicleByIdDtoResponse GetById(Guid id);
        GetVehicleFilterDataDtoResponse GetFilterData();
        bool Update(Guid id, UpdateVehicleDtoRequest dto); 
        bool Delete(Guid id);
        Guid Create(CreateVehicleDtoRequest dto);
    }
}