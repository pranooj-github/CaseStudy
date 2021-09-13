import { TestBed } from '@angular/core/testing';
import { HttpClient,HttpResponse  } from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { CartServiceService } from './cart-service.service';
import { CartDetails } from '../Models/CartDetails';
import { CartItems } from '../Models/CartItems';

describe('CartServiceService', () => {
  let service: CartServiceService;
  let httpClient: HttpClient;
  let httpTestingController:HttpTestingController;
  HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        CartServiceService
      ]
    });
    httpClient =TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CartServiceService);
  });
  afterEach(()=>{
    httpTestingController.verify();
  });
  describe('#getProductById', () => {
    let expectedCart: CartDetails;
    let userId:string;

    beforeEach(() => {
      expectedCart = {
        id:"testcart",
        userId:"testuser",
        cartItems:[],
        totalAmount: 200,
        total_quantity:2
        
      }as CartDetails;
      userId:"testuser" as string;
    });

    //Test case 1
    it('should return expected cart by userid', () => {
      service.getCartByUserId(userId).subscribe(
        data => expect(data).toEqual(expectedCart, 'should return cart with passed UserID'),
        fail
      );
      const req = httpTestingController.expectOne("http://localhost:8086/cart/getCartByUserId/"+userId);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedCart); 
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
