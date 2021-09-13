import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProductlist } from 'src/app/Models/IProductlist';
import { ProductServiceService } from 'src/app/service/product-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MerchantHomeComponent } from './merchant-home.component';
import { HttpClient } from '@angular/common/http';
import { MessagingService } from 'src/app/service/messaging.service';
import { Router } from '@angular/router';
import { ProductListingComponent } from 'src/app/Customer/product-listing/product-listing.component';
import {from} from 'rxjs';
describe('MerchantHomeComponent', () => {
  let component: MerchantHomeComponent;
  let fixture: ComponentFixture<MerchantHomeComponent>;
  let HttpClient: HttpClient;
  let service:ProductServiceService;
  let service1: MessagingService;
  let router:Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MerchantHomeComponent ],
      providers:[
        ProductServiceService,
        MessagingService
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=new ProductServiceService(HttpClient);
    component=new MerchantHomeComponent(service,service1,router)
  });

  it('should return all products',()=>{

    const products:IProductlist[]=
    [
      {
        id: 'abc',
        productName:'shirt',
        productCategory:'fashion',
        price:100 ,
        description:'abcdef',
        image:'http://'	
      }
   ];
      spyOn(service,'getProducts').and.callFake( ()=> {
        return from([products]);
      });
      component.getProducts();
      expect(component.productList).toEqual(products);

  })
});
