import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProductlist } from '../Models/IProductlist';
import { Observable ,throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) { }
  getProducts(): Observable<IProductlist[]>{
    return this.http.get<IProductlist[]>("http://localhost:8086/catalogue/getAllProducts").pipe(catchError(this.erroHandler));
    
  }
  getProductsByCategory(category:string): Observable<IProductlist[]>{
    return this.http.get<IProductlist[]>("http://localhost:8086/catalogue/getProductsByCategory/"+category).pipe(catchError(this.erroHandler));
    
  }
  getProductById(id:string): Observable<IProductlist>{
    return this.http.get<IProductlist>("http://localhost:8086/catalogue/getProductById/"+id).pipe(catchError(this.erroHandler));
    
  }


  erroHandler(error:HttpErrorResponse){
    return throwError(error.message || 'server Error');
  };
  deleteProduct(productId:string){
    
    return this.http.delete("http://localhost:8082/products/deleteById/"+productId);
  }
  addProduct(product:IProductlist): Observable<any>{
    
    return this.http.post("http://localhost:8082/products/addProduct",product);
  }

}


