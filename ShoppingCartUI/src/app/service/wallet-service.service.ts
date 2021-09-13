import { Injectable } from '@angular/core';
import { IWallet } from '../Models/Wallet';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable ,of,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { ITopup } from '../Models/topup';
@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {
  //stores comming 
  userWallet!:IWallet;

  constructor(private http:HttpClient) { }
  getWallet(userId:string): Observable<IWallet>{
    return this.http.get<IWallet>("http://localhost:8086/wallet/getWalletById/"+userId)
    .pipe(
      catchError(this.erroHandler<IWallet>('wallet retrieval',this.userWallet))
    );
    
  }
  erroHandler<T>(operation ='operation',result?: T){
    return (error: any):Observable<T> =>{
        
        return of(result as T);

    }
  };
  createWallet(wallet:IWallet): Observable<any>{
    
    return this.http.post("http://localhost:8086/wallet/add",wallet);
  }

  updateWallet(topup:ITopup): Observable<any>{
    
    return this.http.post("http://localhost:8086/wallet/addMoney",topup);
  }
  
  
}
