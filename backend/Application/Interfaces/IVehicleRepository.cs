using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Vehicle;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IVehicleRepository
    {
        List<Fuel> GetAllFuels();
        List<Brand> GetAllBrands();
        List<Department> GetAllDepartments();
        bool IsVinAvailable(string vin);
        bool IsRegistrationAvailable(string registration);
        Vehicle? GetVehicleById(Guid id);
        List<Vehicle> GetFilteredVehicles(GetFilteredVehiclesDtoRequest dto);
        bool CreateVehicle(Vehicle dto);
        Guid GetPriceId(double pricePerDay);
    }
}