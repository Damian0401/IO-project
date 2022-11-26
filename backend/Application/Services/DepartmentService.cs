using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Dtos.Department;
using Application.Interfaces;

namespace Application.Services
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IDepartmentRepository _departmentRepository;

        public DepartmentService(IDepartmentRepository departmentRepository)
        {
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