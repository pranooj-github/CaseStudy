import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggined:boolean=false;
  isNotLoggined:boolean=false;
  public errorMsg?:HttpErrorResponse;
  LoginForm=this.fb.group({
    email:[''],
    password:['']
      
  })
  constructor(private fb:FormBuilder,private authservice:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }
  login(){
    this.authservice.login(this.LoginForm.value).subscribe(data=>{
      localStorage.setItem("tocken",data.jwtToken);
      this.isLoggined=true;
      this.isNotLoggined=false;
      this.authservice.getUserDetails(this.LoginForm.get('email')?.value).subscribe(data=>{
        
        console.log(data);
        localStorage.setItem("userDetails",JSON.stringify(data));
        localStorage.setItem("userId",data.id);
        localStorage.setItem("role",data.role);
        this.router.navigate(['/products'])
      
    
      });
   
    },
    err=>{
      this.isNotLoggined=true;
    })
    
  }

}
