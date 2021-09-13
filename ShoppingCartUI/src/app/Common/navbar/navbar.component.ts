import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { MessagingService } from 'src/app/service/messaging.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId:string="";
  role:string="";
  constructor(private router : Router,private messaging:MessagingService,private msg_service:MessagingService,private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.messaging.userId.subscribe(
      data=>this.userId=data
    )
    this.messaging.role.subscribe(
      data=>this.role=data
    )
    // this.userId=localStorage.getItem("userId")!;
    // this.role=localStorage.getItem("role")!
  }
  logout(){
    this.msg_service.setUserId("");
    this.msg_service.setRole("");
    localStorage.clear();
    this.cartService.cartItems=[];
    this.router.navigate(['/']);


  }

}
