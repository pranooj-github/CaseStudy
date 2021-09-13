import { CartItems } from "./CartItems";
import { IOrderedProducts } from "./OrderedProducts";

export interface IOrder{
    id:string;
    userId:string;
    totalPrice:number;
    items:IOrderedProducts[];
    orderStatus:string;
    paymentType:string;
    transactionId:string;
}