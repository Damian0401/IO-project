import { DepartmentDetails } from "../../models/Department";
import { User } from "../../models/User";
import { VehicleDetails } from "../../models/Vehicle";
import { CLIENT, EMPLOYEE, MANAGER } from "./constants";


export const userCanDelete = (user?: User, vehicle?: VehicleDetails) => 
    user?.role === MANAGER && vehicle && user.departmentIds.includes(vehicle.departmentId);

export const userCanEdit = (user?: User, vehicle?: VehicleDetails) => 
    (user?.role === MANAGER || user?.role === EMPLOYEE) && vehicle 
    && user.departmentIds.includes(vehicle.departmentId);

export const userCanRent = (user?: User) =>  user?.role === CLIENT;

export const userCanCreate = (user?: User, department?: DepartmentDetails) =>
    user?.role === MANAGER && department && user.departmentIds.includes(department.id);
    
    export const userCanManageRents = (user?: User, department?: DepartmentDetails) =>
    (user?.role === MANAGER || user?.role === EMPLOYEE) && department 
    && user.departmentIds.includes(department.id);
    
export const userCanManageEmployees = (user?: User, department?: DepartmentDetails) =>
    user?.role === MANAGER && department && user.departmentIds.includes(department.id);
