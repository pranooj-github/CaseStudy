import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authservice: AuthServiceService;
  let HttpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormBuilder,Router],
      declarations: [ LoginComponent ],
      providers:[AuthServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    authservice=new AuthServiceService(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login method sucessfull called in service ', () => {
    spyOn(authservice,'login');
    component.login();
    expect(authservice.login).toHaveBeenCalled();
  });
  

});
