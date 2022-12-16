using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Vehicle;
using Application.Interfaces;
using AutoMapper;
using Domain.Models;

namespace Application.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly IVehicleRepository _vehicleRepository;
        private readonly IMapper _mapper;

        public VehicleService(IVehicleRepository vehicleRepository, IMapper mapper)
        {
            _vehicleRepository = vehicleRepository;
            _mapper = mapper;
        }

        public GetFilteredVehiclesDtoResponse GetFilteredVehicles(GetFilteredVehiclesDtoRequest dto)
        {
            var vehicles = _vehicleRepository
                .GetFilteredVehicles(dto);

            var response = new GetFilteredVehiclesDtoResponse
            {
                Vehicles = _mapper.Map<List<VehicleForGetFilteredVehiclesDtoResponse>>(vehicles)
            };

            return response;
        }

        public GetVehicleByIdDtoResponse? GetVehicleById(Guid id)
        {
            var vehicle = _vehicleRepository.GetVehicleById(id);

            if (vehicle is null)
                return null;

            var response = _mapper.Map<GetVehicleByIdDtoResponse>(vehicle);

            return response;
        }

        public bool UpdateVehicle(Guid id, UpdateVehicleDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public bool DeleteVehicle(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool CreateVehicle(CreateVehicleDtoRequest dto)
        {
            var allDepartments = _vehicleRepository.GetAllDepartments();
            var department = allDepartments
                .FirstOrDefault(x => x.Id.Equals(dto.DepartmentId));
            if (department is null)
                return false;

            var allFuels = _vehicleRepository.GetAllFuels();
            var fuel = allFuels
                .FirstOrDefault(x => x.Id.Equals(dto.FuelId));
            if (fuel is null)
                return false;

            var allModels = _vehicleRepository.GetAllBrands()
                .SelectMany(x => x.Models);
            var model = allModels.FirstOrDefault(x => x.Id.Equals(dto.ModelId));
            if (model is null)
                return false;

            var vehicleToCreate = _mapper.Map<Vehicle>(dto);
            vehicleToCreate.PriceId = _vehicleRepository.GetPriceId(dto.Price);

            bool isCreated = _vehicleRepository.CreateVehicle(vehicleToCreate);

            return isCreated;
        }

        public GetVehicleFilterDataDtoResponse GetVehicleFilterData()
        {
            var fuels = _vehicleRepository.GetAllFuels();
            var brands = _vehicleRepository.GetAllBrands();
            var departments = _vehicleRepository.GetAllDepartments();

            var response = new GetVehicleFilterDataDtoResponse
            {
                Brands = _mapper.Map<List<BrandForGetVehicleFilterDataDtoResponse>>(brands),
                Fuels = _mapper.Map<List<FuelForGetVehicleFilterDataDtoResponse>>(fuels),
                Departments = _mapper.Map<List<DepartmentForGetVehicleFilterDataDtoResponse>>(departments),
            };

            return response;
        }
    }
}