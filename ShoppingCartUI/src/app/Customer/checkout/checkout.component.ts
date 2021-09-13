import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItems } from 'src/app/Models/CartItems';
import { ICheckOut } from 'src/app/Models/checkoutInformation';
import { IUsers } from 'src/app/Models/Users';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { MessagingService } from 'src/app/service/messaging.service';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { WalletServiceService } from 'src/app/service/wallet-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:CartItems[]=[];
  totalPrice:number =0;
  totalQuantity:number=0;
  userId:string="";
  role:string="";
  balance:number=0;
  finalOrderDetails:ICheckOut={
    userId:"",
    paymentType:"",
    address:{
      house:"",
      street:"",
      city:"",
      pin:0
    }

  }
  
  
  
  constructor(
    private cartService: CartServiceService,
    private fb:FormBuilder,
    private orderService:OrderServiceService,
    private route:Router,
    private wallet:WalletServiceService,
    private msg_service:MessagingService,
    private userservice:UserDetailsService) { }

  
    // existingData?:IUsers;
    orderForm=this.fb.group({
      address: this.fb.group({
        house:['',[Validators.required]],
        street:['',[Validators.required]],
        city:['',[Validators.required,Validators.maxLength(25)]],
        pin:['',[Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]]
      }),
      payment:['',[Validators.required]]
  
    })
  
  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    
    if(!this.userId || this.role=="merchant"){
      this.route.navigate(['/products'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);

    this.orderDetails();
    
    
  }
    
  orderDetails(){
    this.cartService.getCartByUserId(this.userId).subscribe(data=>{
      this.cartItems=data.cartItems
      this.totalPrice=data.totalAmount;
      this.totalQuantity=data.total_quantity;

    });
    this.getWallet(this.userId);
  }
  getWallet(userId:string){
    this.wallet.getWallet(userId).subscribe(data=>{
      this.balance=data.balance;

    })

  }
  placeOrder(){
    this.finalOrderDetails.userId=this.userId;
    this.finalOrderDetails.paymentType=this.orderForm.get('payment')?.value;
    this.finalOrderDetails.address=this.orderForm.get('address')?.value;
    console.log(this.finalOrderDetails);
    if(this.orderForm.get('payment')?.value==="WALLET"){
      console.log(this.balance);
      if(this.balance<this.totalPrice)
      {
        alert("Insufficient Balance In Wallet")
      }
      else{
        
          this.orderService.placeOrder(this.finalOrderDetails).subscribe(data=>alert("Order Placed Successfully"));
          localStorage.removeItem('cartarray');
          this.cartService.cartItems=[];
          
          this.route.navigate(['/ordersuccess']);
      }
    }
    else{
      localStorage.removeItem('cartarray');
      this.orderService.placeOrder(this.finalOrderDetails).subscribe(data=>alert("Order Placed Successfully"));
      
      this.cartService.cartItems=[];
      
      this.route.navigate(['/ordersuccess']);
    }
    
    

  }

  


}
