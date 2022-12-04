using Application.Dtos.Rent;
using Application.Interfaces;
using AutoMapper;

namespace Application.Services
{
    public class RentService : IRentService
    {
        private readonly IRentRepository _rentRepository;
        private readonly IMapper _mapper;

        public RentService(IRentRepository rentRepository, IMapper mapper)
        {
            _mapper = mapper;
            _rentRepository = rentRepository;
        }
        public bool CancelRent(Guid id)
        {
            throw new NotImplementedException();
        }

        public Guid CreateRent(CreateRentDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public GetArchivedRentsDtoResponse GetArchivedRents()
        {
            throw new NotImplementedException();
        }

        public GetRentByIdDtoResponse? GetRentById(Guid id)
        {
            throw new NotImplementedException();
        }

        public GetActiveRentsDtoResponse GetActiveRents()
        {
            throw new NotImplementedException();
        }

        public bool IssueRent(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool ReceiveRent(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}