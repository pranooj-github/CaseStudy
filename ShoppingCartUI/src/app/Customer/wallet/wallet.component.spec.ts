import { ComponentFixture, TestBed } from '@angular/core/testing';
import {from} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { WalletComponent } from './wallet.component';
import { WalletServiceService } from 'src/app/service/wallet-service.service';
import { MessagingService } from 'src/app/service/messaging.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IWallet } from 'src/app/Models/Wallet';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;
  let HttpClient: HttpClient;
  let service: WalletServiceService;
  let service1: MessagingService;
  let fb: FormBuilder;
  let router:Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ WalletComponent ],
      providers:[
        WalletServiceService,
        MessagingService,
        FormBuilder,
        Router
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(WalletComponent);
    service=new WalletServiceService(HttpClient);
    component=new WalletComponent(service,fb,router,service1)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return user wallet',()=>{

    const wallet:IWallet=
    
      {
        id:"",
        userId:"testuser",
        balance:1000
      }
  
      spyOn(service,'getWallet').and.callFake( ()=> {
        return from([wallet]);
      });
      component.getWallet('testuser');
      expect(component.userWallet).toEqual(wallet);

  })
});
