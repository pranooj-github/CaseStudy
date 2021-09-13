import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetails } from 'src/app/Models/CartDetails';
import { CartItems } from 'src/app/Models/CartItems';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { MessagingService } from 'src/app/service/messaging.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:CartItems[]=[];
  totalPrice:number =0;
  totalQuantity:number=0;
  
  userId:string="";//6129f05785237c5f2cb041b0
  role:string="";
  constructor(private cartService:CartServiceService,private route:Router,private msg_service: MessagingService) { }
  userDetails:string="";
  
  ngOnInit(): void {
    this.userDetails=localStorage.getItem("userDetails")!;
    this.userId=localStorage.getItem("userId")!;

    
    this.role=localStorage.getItem("role")!;
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    this.listCartDetails();
  }

  listCartDetails(){
    this.cartItems=JSON.parse(localStorage.getItem("cartarray")!);
    
    //cart total price
    this.cartService.totalPrice.subscribe(
      data=>this.totalPrice=data
    )
    //cart totalQuantity
    this.cartService.totalQuantity.subscribe(data=>this.totalQuantity=data)

    //compute cart total price and quantity
    this.cartService.computeCartTotals();
  }
  incrementQuantity(theCartItem:CartItems){
    this.cartService.addToCart(theCartItem);
    this.listCartDetails();
  }
  decrementQuantity(theCartItem:CartItems){
    this.cartService.decrementQuantity(theCartItem);
    this.listCartDetails();
  }

  updateCartDb(){
      const finalCart:CartDetails= new CartDetails("",this.userId,this.cartItems,this.totalPrice,this.totalQuantity);
      console.log(finalCart);
      this.cartService.saveCart(finalCart).subscribe(data=>console.log(data));
      // localStorage.clear();   
  }


}
