import { TestBed } from '@angular/core/testing';
import { HttpClient,HttpResponse  } from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { UserDetailsService } from './user-details.service';
import { IUsers } from '../Models/Users';

describe('UserDetailsService', () => {
  let service: UserDetailsService;
  let httpClient: HttpClient;
  let httpTestingController:HttpTestingController;
  HttpClientTestingModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        UserDetailsService
      ]

    });
    service = TestBed.inject(UserDetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    
  });
  afterEach(()=>{
    httpTestingController.verify();
  });
  describe('#getProducts',()=>{
    let user:IUsers;

    beforeEach(()=>{
      user={
        id:"test1",
        userName:"testuser",
        password:"",
        phone:123456789,
        address:{
          street:"",
          house:"",
          city:"",
          pin:1234
        },
        role:"customer",
        email:"@gmail"
      }
    });
    it('should return user',()=>{
      service.getUserDetails("test1").subscribe(
        data=> expect(data).toEqual(user,'should return expected user'),
        fail
      );
      let userId="test1"
      const reques =httpTestingController.expectOne("http://localhost:8086/user/getUserById/"+userId);
      expect(reques.request.method).toEqual('GET');
      reques.flush(user);
    })
    });


  })

