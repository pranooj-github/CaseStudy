import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/Models/Users';
import { MessagingService } from 'src/app/service/messaging.service';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  userId:string="";
  role:string="";
  
  customerDetails:IUsers ={
    id:"",
    userName:"",
    phone: 0,
    email: "",
    password: "",
    role: "",
    address: {
      house:"",
      street:"",
      city:"",
      pin:0
    }
  };


  constructor(private fb:FormBuilder,private userservice:UserDetailsService,private route:Router,private msg_service:MessagingService) { 
    
  }
  
  profileForm=this.fb.group({
    userName:['',[Validators.required,Validators.maxLength(25)]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]],
    address: this.fb.group({
      house:[''],
      street:[''],
      city:[''],
      pin:['',[Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]]
    }),
    password:['']
  })

  existingData?:IUsers;

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId")!;
    this.role=localStorage.getItem("role")!;
    if(!this.userId || this.role=="merchant"){
      this.route.navigate(['/products'])
    }
    
    this.msg_service.setUserId(this.userId);
    this.msg_service.setRole(this.role);
    

    this.getExistingProfileData()
    
    
  }
  

  getExistingProfileData(){
    this.userservice.getUserDetails(this.userId).subscribe(data=>{
      this.existingData=data;
      console.log(this.existingData)
      this.loadApiData();
      
    })

  }

  loadApiData(){
    if(this.existingData){
    this.profileForm.patchValue(this.existingData);
  }
  }
  submit(){
    
    this.customerDetails.id=this.userId;
    this.customerDetails.userName=this.profileForm.get('userName')?.value;
    this.customerDetails.email=this.profileForm.get('email')?.value;
    this.customerDetails.phone=this.profileForm.get('phone')?.value;
    this.customerDetails.password=this.profileForm.get('password')?.value;
    this.customerDetails.role="customer";
    this.customerDetails.address=this.profileForm.get('address')?.value;
    this.userservice.updateUser(this.customerDetails!).subscribe(
      data=>{
        alert("Successfully Updated Your profile")
        this.route.navigate(['/profile'])
        
      });
    
    
  }

}
