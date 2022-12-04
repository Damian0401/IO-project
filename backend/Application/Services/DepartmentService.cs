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
        public GetAllDepartmentsDtoResponse GetAllDepartments()
        {
            var departments = _departmentRepository.GetAllDepartments();

            var response = new GetAllDepartmentsDtoResponse
            {
                Departments = _mapper.Map<List<DepartmentForGetAllDepartmentsDtoResponse>>(departments)
            };

            return response;
        }

        public GetDepartmentByIdDtoResponse? GetDepartmentById(Guid id)
        {
            var department = _departmentRepository
                .GetDepartmentById(id);

            if (department is null)
                return null;

            var response = _mapper.Map<GetDepartmentByIdDtoResponse>(department);

            return response;
        }
    }
}