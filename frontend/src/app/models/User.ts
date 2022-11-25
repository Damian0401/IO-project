

export interface UserRegisterValues {
    login: string;
    password: string;
    email: string;
    pesel: number;
    phoneNumber: number;
    postCode: string;
    city: string;
    street: string;
    houseNumber: string;
    apartmentNumber: string;
}


export interface UserLoginValues {
    login: string;
    password: string;
}