import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction } from 'src/app/Models/Transaction';
import { MessagingService } from 'src/app/service/messaging.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-previous-transactions',
  templateUrl: './previous-transactions.component.html',
  styleUrls: ['./previous-transactions.component.css']
})
export class PreviousTransactionsComponent implements OnInit {
  userId?:string;
  role?:string;
  previousTransaction:ITransaction[]=[];
  constructor(private msg_service: MessagingService,private router:Router, private transactionservice:TransactionServiceService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    
    if(!this.userId|| this.role=="merchant"){
      this.router.navigate(['/product'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    this.transactionservice.getOrdersByUserId(this.userId).subscribe(data=>this.previousTransaction=data);
    
  }


}
