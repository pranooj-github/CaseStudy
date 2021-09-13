import { IAddress } from "./Address";


export interface ICheckOut{
    userId : string;
    paymentType : string;
    address : IAddress;
}