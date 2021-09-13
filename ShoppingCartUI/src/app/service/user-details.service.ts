import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IProductlist } from '../Models/IProductlist';
import { Observable ,throwError } from 'rxjs';
import { IUsers } from '../Models/Users';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }
  getUserDetails(userId:string): Observable<IUsers>{
    return this.http.get<IUsers>("http://localhost:8086/user/getUserById/"+userId).pipe(catchError(this.erroHandler));

  }

  registerUser(profile:IUsers): Observable<string>{
    
    return this.http.post<string>("http://localhost:8086/register",profile);
  }
  updateUser(profile:IUsers): Observable<any>{
    
    return this.http.put("http://localhost:8086/user/updateUser",profile);
  }
  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  };
}
