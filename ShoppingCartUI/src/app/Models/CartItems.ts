import { IProductlist } from "./IProductlist";

export class CartItems{
    product_Id:String;
    productName:String;
    image:String;
    unitPrice:number;
    quantity:number;
    constructor(product:IProductlist)
    {
        this.product_Id=product.id;
        this.productName=product.productName;
        this.image=product.image;
        this.unitPrice=product.price;
        this.quantity=1;

    }
    

}