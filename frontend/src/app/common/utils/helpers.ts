import { User } from "../../models/User";
import { VehicleDetails } from "../../models/Vehicle";
import { CLIENT, EMPLOYEE, MANAGER } from "./constants";


export const userCanDelete = (user?: User, vehicle?: VehicleDetails) => 
    user?.role === MANAGER && vehicle && user.departmentIds.includes(vehicle.departmentId);

export const userCanEdit = (user?: User, vehicle?: VehicleDetails) => 
    (user?.role === MANAGER || user?.role === EMPLOYEE) && vehicle 
    && user.departmentIds.includes(vehicle.departmentId);

export const userCanRent = (user?: User) =>  user?.role === CLIENT;