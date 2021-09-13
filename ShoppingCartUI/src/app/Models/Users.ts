import { IAddress } from "./Address";

export interface IUsers{
    id:string;
    userName: string;
    email:string;
    phone: number;  
    password: string;
    role:   string;
    address:  IAddress;
}