using Application.Dtos.Department;

namespace Application.Interfaces
{
    public interface IDepartmentService
    {
        GetAllDepartmentsDtoResponse GetAll();
        GetDepartmentByIdDtoResponse GetById();
    }
}