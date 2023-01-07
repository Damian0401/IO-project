import { DepartmentDetails } from "../../models/Department";
import { User } from "../../models/User";
import { VehicleDetails } from "../../models/Vehicle";
import { CLIENT, EMPLOYEE, MANAGER } from "./constants";


export const userCanDeleteVehicle = (user?: User, vehicle?: VehicleDetails) => 
    user?.role === MANAGER && vehicle && user.departmentIds.includes(vehicle.departmentId);

export const userCanEditVehicle = (user?: User, vehicle?: VehicleDetails) => 
    (user?.role === MANAGER || user?.role === EMPLOYEE) && vehicle 
    && user.departmentIds.includes(vehicle.departmentId);

export const userCanRentVehicle = (user?: User) =>  user?.role === CLIENT;

export const userCanCreateVehicle = (user?: User, departmentId?: string) =>
    user?.role === MANAGER && departmentId && user.departmentIds.includes(departmentId);
    
export const userCanManageRents = (user?: User, department?: DepartmentDetails) =>
    (user?.role === MANAGER || user?.role === EMPLOYEE) && department 
    && user.departmentIds.includes(department.id);
    
export const userCanManageEmployees = (user?: User, departmentId?: string) =>
    user?.role === MANAGER && departmentId && user.departmentIds.includes(departmentId);
