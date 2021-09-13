import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRegistrationComponent } from 'src/app/Common/dialog-registration/dialog-registration.component';
import { PasswordValidator } from 'src/app/Common/navbar/password.validator';
import { IUsers } from 'src/app/Models/Users';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userDetails:IUsers={
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
  message?:string;

  constructor(private fb:FormBuilder,private userService:UserDetailsService,private route:Router,
    public dialog:MatDialog) { }
  profileForm=this.fb.group({
    userName:['',[Validators.required,Validators.maxLength(25)]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(10),Validators.minLength(10)]],
    password:['',[Validators.required]],
    password2:['']
  },{validator: PasswordValidator});

  ngOnInit(): void {
  }
  submit(){
 
    this.userDetails.userName=this.profileForm.get('userName')?.value;
    this.userDetails.email=this.profileForm.get('email')?.value;
    this.userDetails.phone=this.profileForm.get('phone')?.value;
    this.userDetails.password=this.profileForm.get('password')?.value;
    this.userDetails.role="customer";
    this.userService.registerUser(this.userDetails).subscribe(data=>{ this.message=data
      
  });
      
      this.route.navigate(["/login"]);
      this.dialog.open(DialogRegistrationComponent)

      
  }

}
