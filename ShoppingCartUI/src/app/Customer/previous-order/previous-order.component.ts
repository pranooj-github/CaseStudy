import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from 'src/app/Models/CartItems';
import { IOrder } from 'src/app/Models/OrderDetails';
import { IOrderedProducts } from 'src/app/Models/OrderedProducts';
import { MessagingService } from 'src/app/service/messaging.service';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {
  public userId:string="";
  incomingOrderDetails:IOrder[]=[];
  // orderItems:IOrderedProducts[]=[];
  
  public role!:string;

  constructor(private orderService:OrderServiceService,private msg_service: MessagingService,private router:Router) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    
    if(!this.userId|| this.role=="merchant"){
      this.router.navigate(['/product'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);

    
    this.orderService.getOrdersByUderId(this.userId).subscribe(data=>{
      this.incomingOrderDetails=data;
      console.log(this.incomingOrderDetails);
    });
  }

}
