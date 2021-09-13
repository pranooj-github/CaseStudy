import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ITransaction } from '../Models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient) { }
  getOrdersByUserId(userId:string): Observable<ITransaction[]>{
    return this.http.get<ITransaction[]>("http://localhost:8086/transaction/showtransactions/"+userId).pipe(catchError(this.erroHandler));
  }
  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }
}
