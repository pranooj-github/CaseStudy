import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductlist } from 'src/app/Models/IProductlist';
import { MessagingService } from 'src/app/service/messaging.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
@Component({
  selector: 'app-merchant-home',
  templateUrl: './merchant-home.component.html',
  styleUrls: ['./merchant-home.component.css']
})
export class MerchantHomeComponent implements OnInit {

  public productList : IProductlist[]=[] ;
  public errorMsg:string="";
  public userId!:string;
  public role!:string;
  public popoverTitle="Product Delete Confirmation";
  public popoverMessage="Are you sure?";

  constructor(private prod_Service: ProductServiceService,
    private msg_service:MessagingService,
    private router:Router) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    if(!this.userId || this.role=="customer"){
      this.router.navigate(['/products'])
    }
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

  // deleteProduct(productId:string){
  //     this.prod_Service.deleteProduct(productId).subscribe(data=>alert("Product deleted"));
  //     this.ngOnInit();
      
  // }
  deleteProduct(productId:string){
    // if(confirm("Are you sure?"))
    // {
      this.prod_Service.deleteProduct(productId).subscribe(data=>console.log(data))
      this.ngOnInit()

    // }
    // else{
    //   this.ngOnInit()
    // }   
  }
  cancel(){
    this.ngOnInit();
  }
  editProduct(productId:string){
      this.router.navigate(['/editproducts',productId]);
  }
  

}
