import { IAddress } from "./i-address";
import { IDependent } from "./i-dependent";
import { IPhone } from "./i-phone";

export interface IUser {
    name: string;
    email: string;
    country: string;
    state: string;
    maritalStatus: number;
    monthlyIncome: number;
    birthDate: string;
    phoneList: IPhone[];
    addressList: IAddress[];
    dependentsList: IDependent[];
}