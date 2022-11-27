using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Department;
using Application.Interfaces;
using AutoMapper;

namespace Application.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IDepartmentRepository _departmentRepository;
        private readonly IMapper _mapper;

        public DepartmentService(IDepartmentRepository departmentRepository, IMapper mapper)
        {
            _mapper = mapper;
            _departmentRepository = departmentRepository;
        }
        public GetAllDepartmentsDtoResponse GetAll()
        {
            throw new NotImplementedException();
        }

        public GetDepartmentByIdDtoResponse GetById()
        {
            throw new NotImplementedException();
        }
    }
}