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
        public bool Cancel(Guid id)
        {
            throw new NotImplementedException();
        }

        public Guid Create(CreateRentDtoRequest dto)
        {
            throw new NotImplementedException();
        }

        public GetArchivedRentsDtoResponse GetArchived()
        {
            throw new NotImplementedException();
        }

        public GetRentByIdDtoResponse? GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public GetActiveRentsDtoResponse GetActive()
        {
            throw new NotImplementedException();
        }

        public bool Issue(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Receive(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}