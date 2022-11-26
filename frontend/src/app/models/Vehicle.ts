

export interface Vehicle {
    id: string;
    model: string;
    imageUrl: string;
    status: string;
}

export interface VehicleDetails {
    id: string;
    model: string;
    brand: string;
    yearOfProduction: number;
    imageUrl: string;
    fuel: string;
    seats: number;
    description: string;
    status: string;
    department: string;
    price: number;
}

export interface VehicleForRent {
    id: string;
    model: string;
    brand: string;
    yearOfProduction: number;
}