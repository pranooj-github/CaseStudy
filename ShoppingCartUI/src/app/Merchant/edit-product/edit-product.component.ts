import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogueProductupdateComponent } from 'src/app/Common/dialogue-productupdate/dialogue-productupdate.component';
import { IProductlist } from 'src/app/Models/IProductlist';
import { MessagingService } from 'src/app/service/messaging.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updatedProduct:IProductlist={
    id:"",
    productName:"",
    productCategory:"",
    price:0,
    description:"",
    image:""
  };
  incomingProduct!:IProductlist;
  public userId!:string;
  public role!:string;
  productId!:string;

  constructor(private route:Router,private fb:FormBuilder,
    private productService:ProductServiceService,
    private msg_service:MessagingService,
    private activateRoute:ActivatedRoute,
    public dialog:MatDialog
    ) { }
  productAddForm=this.fb.group(
    {
      productName:[''],
      productCategory:['fashion'],
      price:['',[Validators.pattern("^[0-9]*$")]],
      description:[''],
      image:['']
    }
  )

  ngOnInit(): void {
    this.role=localStorage.getItem("role")!;
    this.userId=localStorage.getItem("userId")!;

    
    if(!this.userId || this.role!="merchant"){
      this.route.navigate(['/products'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    this.productId=this.activateRoute.snapshot.params['id'];
    this.featchExistingProduct();
    

  }
  featchExistingProduct(){
    this.productService.getProductById(this.productId).subscribe(data=>{
      this.incomingProduct=data
      console.log(this.incomingProduct)
      this.loadExistingProduct();
      
    })
  }
  loadExistingProduct(){
    console.log(this.incomingProduct)
    if(this.incomingProduct){
      this.productAddForm.patchValue(this.incomingProduct);
    }
  }

  submit(){
    this.updatedProduct=this.productAddForm.value;
    this.updatedProduct.id=this.productId;
    console.log(this.updatedProduct)
    this.productService.addProduct(this.updatedProduct).subscribe(data=>"")
    // alert("Produt details Updated")
    this.dialog.open(DialogueProductupdateComponent);
    this.route.navigate(['/merchanthome'])
    
  }

}
