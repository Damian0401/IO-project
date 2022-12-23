

export interface UserRegisterValues {
    login: string;
    password: string;
    email: string;
    pesel: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
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

export interface User {
    login: string;
    token: string;
}