import { Vehicle, VehicleForRent } from "./Vehicle";


export interface Rent {
    id: string;
    status: string;
    startDate: Date;
    vehicle: string;
}

export interface RentDetails {
    id: string;
    startDate?: Date;
    endDate?: Date;
    client: string;
    renter?: string;
    receiver?: string;
    vehicle: VehicleForRent;
    status: string;
}