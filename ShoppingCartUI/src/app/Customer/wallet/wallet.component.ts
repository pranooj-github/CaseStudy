import { Component, OnInit } from '@angular/core';
import { IWallet } from 'src/app/Models/Wallet';
import { WalletServiceService } from 'src/app/service/wallet-service.service'; 
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ITopup } from 'src/app/Models/topup';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/service/messaging.service';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit 
{
  public userWallet!:IWallet;
  public errorMsg:string="";
  public showForm:boolean=false;
  public showTopup:boolean=false;
  public id:string="";
  public role:string="";
  public newVallet:IWallet={
    id:"",
    userId:"",
    balance:0
  };
  public topupObj:ITopup={
    userId:"",
    balance:0
  };

  constructor(private wallet_service: WalletServiceService,private fb:FormBuilder,private route: Router,private msg_service: MessagingService) { }
  initialWalletForm=this.fb.group(
    {
      amount:['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    }
  );
  topupForm=this.fb.group(
    {
      amount:['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    }
  );

  ngOnInit(): void {
    this.id=localStorage.getItem("userId")!;
    if(!this.id){
      this.route.navigate(['/products'])
    }
    this.role=localStorage.getItem("role")!;
    this.msg_service.setUserId(this.id);
    this.msg_service.setRole(this.role);
    console.log(this.id);
    this.getWallet(this.id)
  }
  getWallet(userId:string){
      this.wallet_service.getWallet(userId).subscribe(data=>
      this.userWallet=data,
      error=>this.errorMsg=error
    );    
  }
  get controls(){
    return this.initialWalletForm.controls;
  }
  get topupcontrols(){
    return this.topupForm.controls;
  }
  
  //form showing on click
  showWalletCreateForm(){
    this.showForm=true;
  }
  showTopUp(){
    this.showTopup=true;
  }
  createWallet(){
    let amount=this.initialWalletForm.get('amount')?.value;
    this.newVallet.userId=this.id;
    this.newVallet.balance=amount;
    console.log(this.newVallet);
    
    this.wallet_service.createWallet(this.newVallet).subscribe(data=>"");
    alert("Created Wallet Successfully")
    this.route.navigate(['/profile'])
  }
  topup(){
    let amount=this.topupForm.get('amount')?.value;
    this.topupObj.userId=this.id;
    this.topupObj.balance=amount;
    this.wallet_service.updateWallet(this.topupObj).subscribe(data=>"");
    alert("Updated Wallet Successfully")
    // this.route.navigate(['/profile'])
    this.ngOnInit();
  }
}


