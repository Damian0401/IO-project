using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Vehicle;
using Application.Interfaces;
using AutoMapper;

namespace Application.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly IVehicleRepository _vehicleRepository;
        private readonly IMapper _mapper;

        public VehicleService(IVehicleRepository vehicleRepository, IMapper mapper)
        {
            _mapper = mapper;
            _vehicleRepository = vehicleRepository;
        }

        public GetFilteredVehiclesDtoResponse GetFiltered(GetFilteredVehiclesDtoRequest dto)
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

        public Guid Create(CreateVehicleDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public GetVehicleFilterDataDtoResponse GetFilterData()
        {
            throw new NotImplementedException();
        }
    }
}