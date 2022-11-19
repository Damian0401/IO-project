using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Vehicle;
using Application.Interfaces;

namespace Application.Services
{
    public class VehicleService : IVehicleService
    {
        public GetVehiclesDtoResponse GetFiltered(GetVehiclesDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public GetVehicleByIdDtoResponse GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Update(Guid id, UpdateVehicleDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}