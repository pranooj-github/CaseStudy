import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ICheckOut } from '../Models/checkoutInformation';
import { IOrderedProducts } from '../Models/OrderedProducts';
import { IOrder } from '../Models/OrderDetails';
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }
  placeOrder(order:ICheckOut): Observable<any>{

    console.log(order);
    return this.http.post("http://localhost:8086/cart/order",order);
  }
  getOrdersByUderId(userId:string): Observable<IOrder[]>{
    return this.http.get<IOrder[]>("http://localhost:8086/order/orderByUserId/"+userId).pipe(catchError(this.erroHandler));
  }
  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  }
}
