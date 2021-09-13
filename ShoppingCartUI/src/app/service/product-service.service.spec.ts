import { TestBed } from '@angular/core/testing';
import { HttpClient,HttpResponse  } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { IProductlist } from '../Models/IProductlist';

describe('ProductServiceService', () => {
  let service: ProductServiceService;
  let httpClient: HttpClient;
  let httpTestingController:HttpTestingController;
  HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        ProductServiceService
      ]
    });
    httpClient =TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductServiceService);
  });

  afterEach(()=>{
    httpTestingController.verify();
  });
  describe('#getProducts',()=>{
    let expectedProducts:IProductlist[];

    beforeEach(()=>{
      expectedProducts=[{
        id:"test1",
        productName:"shirt",
        description:"Puma tshirt",
        price:1000,
        productCategory:"fashion",
        image:"http://"
      },
      {
        id:"test2",
        productName:"pants",
        description:"Puma pant",
        price:1000,
        productCategory:"fashion",
        image:"http://"
      } 
    ]
    });
    it('should return all the products',()=>{
      service.getProducts().subscribe(
        data=> expect(data).toEqual(expectedProducts,'should return expected products'),
        fail
      );
      const reques =httpTestingController.expectOne("http://localhost:8086/catalogue/getAllProducts");
      expect(reques.request.method).toEqual('GET');
      reques.flush(expectedProducts);
    })
    it('returning no products should be OK ', () => {
      service.getProducts().subscribe(
        data => expect(data.length).toEqual(0, 'should have empty products array'),
        fail
      );

      const req = httpTestingController.expectOne("http://localhost:8086/catalogue/getAllProducts");
      req.flush([]); //Return empty data
    });


  })



  describe('#getProductById', () => {
    let expectedProduct: IProductlist;
    let id:string;

    beforeEach(() => {
      expectedProduct = {
        id:"test1",
        productName:"shirt",
        description:"Puma tshirt",
        price:1000,
        productCategory:"fashion",
        image:"http://"
      }as IProductlist;
        id ="6129af9906a9bf72d1e3b101" as string;
    });

    //Test case 1
    it('should return expected product by passing id', () => {
      service.getProductById(id).subscribe(
        data => expect(data).toEqual(expectedProduct, 'should return products with passed ID'),
        fail
      );
      const req = httpTestingController.expectOne("http://localhost:8086/catalogue/getProductById/"+id);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedProduct); 
    });

  });

  describe('#EmployeeService.addEmploye()', () => {
    
    //Test case 1
    it('should add a product', () => {
      const product: IProductlist = { id:"test",productName:"Iphone",productCategory:"electronics",price:100000,description:"new iphone 11",image:"http://" };
  
      service.addProduct(product).subscribe(
        data => expect(data).toEqual(product, 'should return the product'),
        fail
      );
  
      // addEmploye should have made one request to POST employee
      const req = httpTestingController.expectOne("http://localhost:8082/products/addProduct");
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(product);
  
      // Expect server to return the employee after POST
      const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: product });
      req.event(expectedResponse);
    });
  
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
