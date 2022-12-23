import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../common/utils/constants";
import { Department as DepartmentDto, DepartmentDetails, DepartmentMarker } from "../models/Department";
import { User, UserLoginValues } from "../models/User";
import { Vehicle as VehicleDto, VehicleDetails, VehicleFilters } from "../models/Vehicle";


axios.defaults.baseURL = BASE_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Department = {
    getAll: () => requests.get<{ departments: DepartmentDto[] }>('/department').then(x => x.departments),
    getMarkers: () => requests.get<{ departments: DepartmentMarker[] }>('/department').then(x => x.departments),
    getById: (id: string) => requests.get<DepartmentDetails>(`/department/${id}`),
};

const Vehicle = {
    getAll: (filters?: string) => requests.get<{ vehicles: VehicleDto[] }>(`/vehicle?${filters}`).then(x => x.vehicles),
    getById: (id: string) => requests.get<VehicleDetails>(`/vehicle/${id}`),
    getFilters: () => requests.get<VehicleFilters>('/vehicle/filters')
};

const Account = {
    login: (loginValues: UserLoginValues) => requests.post<User>('account/login', loginValues),
}

const agent = {
    Department,
    Vehicle,
    Account,
};

export default agent;