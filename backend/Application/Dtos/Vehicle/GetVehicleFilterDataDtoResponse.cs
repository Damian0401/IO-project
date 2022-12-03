using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Dtos.Vehicle
{
    public class GetVehicleFilterDataDtoResponse
    {
        public IEnumerable<string> Fuels { get; set; } = default!;
        public IEnumerable<string> Brands { get; set; } = default!;
        public double MinPricePerDay { get; set; }
        public double MaxPricePerDay { get; set; }
    }
}