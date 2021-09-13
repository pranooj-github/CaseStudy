import { CartItems } from "./CartItems";

export class CartDetails
{
	id:string;
	userId:string;
	cartItems:CartItems[];
	totalAmount: number;
	total_quantity:number;
	constructor(id:string,userId:string,cartItems:CartItems[],totalAmount:number,total_quantity:number){
		this.id=id;
			this.userId=userId;
			this.cartItems=cartItems;
			this.totalAmount=totalAmount;
			this.total_quantity=total_quantity;

	}
    
}
