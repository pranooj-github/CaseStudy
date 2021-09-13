import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { IUsers } from '../Models/Users';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data:any): Observable<any>{
    
    return this.http.post("http://localhost:8086/authenticate",data).pipe(catchError(this.erroHandler));
  }
  getUserDetails(email:string): Observable<IUsers>{
    console.log(email);
    return this.http.get<IUsers>("http://localhost:8086/user/getuserbyemail/"+email).pipe(catchError(this.erroHandler));

  }
  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  };
}
