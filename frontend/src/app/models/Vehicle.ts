

export interface Vehicle {
    id: string;
    model: string;
    brand: string;
    yearOfProduction: number;
    imageUrl: string;
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
    departmentId: string;
    price: number;
}

export interface VehicleForRent {
    id: string;
    model: string;
    brand: string;
    yearOfProduction: number;
}

export interface VehicleFilters {
    fuels: Fuel[];
    brands: Brand[];
    departments: Department[];
}

interface Fuel {
    id: string;
    type: string;
}

interface Brand {
    id: string;
    name: string;
    models: Model[]
}

interface Model {
    id: string;
    name: string;
}

interface Department {
    id: string;
    name: string;
}

export interface SelectedFilters {
    departmentId?: string;
    fuelId?: string;
    brandId?: string;
    modelId?: string;
    seats: number
    minPrice: number;
    maxPrice: number;
}