import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { CartDetails } from '../Models/CartDetails';
import { CartItems } from '../Models/CartItems';
import { Observable ,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

 
  cartItems:CartItems[]=[];

  test:string="";

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  
  constructor(private http:HttpClient) { 
    this.cartItems=localStorage.getItem("cartarray") != null  ? JSON.parse(localStorage.getItem("cartarray")!)  : [];

  }
addToCart(theCartItem:CartItems)
{       
 
          
          // check if we already have the item in our cart
          let alreadyExistsInCart: boolean = false;
          let existingCartItem: any = undefined;

      if (this.cartItems.length > 0) 
      {
          // find the item in the cart based on item id

            existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.product_Id === theCartItem.product_Id );

          // check if we found it change to true
            alreadyExistsInCart = (existingCartItem != undefined);
      } 

      if (alreadyExistsInCart)
      {
            // increment the quantity inside the particular product
            existingCartItem.quantity++;

      }
      else {
            // just add the item to the array
            this.cartItems.push(theCartItem);
   
          }
          
          localStorage.setItem("cartarray",JSON.stringify(this.cartItems));


        // compute cart total price and total quantity
        this.computeCartTotals();


}
computeCartTotals()
  {
    let totalPriceValue:number=0;
    let totalQuantityValue:number=0;
    for(let currentCartItem of this.cartItems)
      {
        totalPriceValue +=currentCartItem.quantity*currentCartItem.unitPrice;
        totalQuantityValue +=currentCartItem.quantity;
      }
 

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  
    // this.logCartData(totalPriceValue,totalQuantityValue);

}
//decrement quantity

decrementQuantity(theCartItem:CartItems)
{
  
  this.cartItems.forEach(item=>{
    if(item.product_Id==theCartItem.product_Id){
      item.quantity--;
      if(item.quantity==0){
        this.remove(theCartItem);
      }

    }
  })
  localStorage.setItem("cartarray",JSON.stringify(this.cartItems));

   this.computeCartTotals(); 
  
}
//remove method
remove(theCartItem:CartItems){
  //get index of the item in the array

  const itemIndex=this.cartItems.findIndex(item=>item.product_Id==theCartItem.product_Id);

  //if found, remove the item from array at the given index
  if(itemIndex > -1){
    this.cartItems.splice(itemIndex,1);
   
  }
  

}



//savingcart
  saveCart(finalCart:CartDetails): Observable<any>{

    return this.http.post("http://localhost:8086/cart/addCart",finalCart);
  }


//getting cart based on userid

getCartByUserId(userId:string): Observable<CartDetails>{
    return this.http.get<CartDetails>("http://localhost:8086/cart/getCartByUserId/"+userId).pipe(catchError(this.erroHandler));
  }
  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }
}
