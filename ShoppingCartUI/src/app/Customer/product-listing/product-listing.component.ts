import { Component, OnInit } from '@angular/core';
import { CartDetails } from 'src/app/Models/CartDetails';

import { CartItems } from 'src/app/Models/CartItems';
import { IProductlist } from 'src/app/Models/IProductlist';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { MessagingService } from 'src/app/service/messaging.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  public productList : IProductlist[]=[] ;
  public errorMsg:string="";
  // public alreadyExistingCart!:CartDetails;
  public userId!:string;
  public role!:string;

  constructor(private prod_Service: ProductServiceService,private cart_service: CartServiceService,private msg_service: MessagingService) { }

  // userId:string="611f315f67ed0a5101f1a2a5";
  public book="book";
  public electronics="electronics";
  public fashion="fashion";

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    this.getProducts();
  }
  getProducts(){
    this.prod_Service.getProducts().subscribe(data=>
      this.productList=data,
      error=>this.errorMsg=error
    );
  }
  addToCart(theProduct:IProductlist){
     //console.log(`adding to cart: ${theProduct.productName}`);
     
     const theCartItem:CartItems= new CartItems(theProduct);
     this.cart_service.addToCart(theCartItem);  
     
  }
  filter(category:string){
    
    this.prod_Service.getProductsByCategory(category).subscribe(data=>
      this.productList=data,
      error=>this.errorMsg=error
    );
  }
  
 

}
