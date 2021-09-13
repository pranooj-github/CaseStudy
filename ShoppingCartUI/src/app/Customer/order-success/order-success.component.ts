import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/service/messaging.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  userId?:string;
  role?:string;
  constructor(private msg_service: MessagingService,private router:Router) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    
    if(!this.userId|| this.role=="merchant"){
      this.router.navigate(['/product'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);

  }

}
