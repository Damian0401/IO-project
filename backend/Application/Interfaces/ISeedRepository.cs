using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ISeedRepository
    {
        void SeedVehicleStatuses();
        void SeedFuels();
        void SeedRoles();
        void SeedRentStatuses();
        void SeedModelsAndBrands();
    }
}