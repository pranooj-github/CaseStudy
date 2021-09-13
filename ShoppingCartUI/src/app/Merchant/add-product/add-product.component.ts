import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogueProductaddComponent } from 'src/app/Common/dialogue-productadd/dialogue-productadd.component';
import { IProductlist } from 'src/app/Models/IProductlist';
import { MessagingService } from 'src/app/service/messaging.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct:IProductlist={
    id:"",
    productName:"",
    productCategory:"",
    price:0,
    description:"",
    image:""
  };
  public userId!:string;
  public role!:string;
  constructor(private fb:FormBuilder,private productService:ProductServiceService,private msg_service:MessagingService,
    private route:Router,
    public dialog:MatDialog) { }

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
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    console.log(this.role)
    if(!this.userId || this.role=="customer"){
      this.route.navigate(['/products'])
    }
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    
  }
  submit(){
    this.newProduct.id="";
    this.newProduct.productName=this.productAddForm.get('productName')?.value;
    this.newProduct.productCategory=this.productAddForm.get('productCategory')?.value;
    this.newProduct.price=this.productAddForm.get('price')?.value;
    this.newProduct.description=this.productAddForm.get('description')?.value;
    this.newProduct.image=this.productAddForm.get('image')?.value;
    this.productService.addProduct(this.newProduct).subscribe();
    // alert("Added Product Successfully")
    this.dialog.open(DialogueProductaddComponent);
    this.route.navigate(['/merchanthome'])

  }

}
