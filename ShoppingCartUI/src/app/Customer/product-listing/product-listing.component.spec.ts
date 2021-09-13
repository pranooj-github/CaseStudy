import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IProductlist } from 'src/app/Models/IProductlist';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { from as observableFrom } from 'rxjs';
import {from} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { ProductListingComponent } from './product-listing.component';

import { CartServiceService } from 'src/app/service/cart-service.service';
import { MessagingService } from 'src/app/service/messaging.service';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;
  let HttpClient: HttpClient;
  let service:ProductServiceService;
  let service2:CartServiceService;
  let service3: MessagingService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ProductListingComponent ],
      providers:[
        ProductServiceService,
        CartServiceService,
        MessagingService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    service=new ProductServiceService(HttpClient);
    component=new ProductListingComponent(service,service2,service3)
    fixture.detectChanges();
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
  it('returns product by category',()=>{

    const products:IProductlist[]=
    [
      {
        id: 'abc',
        productName:'shirt',
        productCategory:'fashion',
        price:100 ,
        description:'abcdef',
        image:'http://'	
      },
      {
        id: 'abcd',
        productName:'pant',
        productCategory:'fashion',
        price:100 ,
        description:'abcdef',
        image:'http://'	
      }
   ];
      spyOn(service,'getProductsByCategory').and.callFake( ()=> {
        return from([products]);
      });
      component.filter('fashion');
      expect(component.productList).toEqual(products);

  })
});
