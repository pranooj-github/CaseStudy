import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterseptorService implements HttpInterceptor{

  url?: string;
	constructor(private router: Router) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let headers = new HttpHeaders();
		const token = localStorage.getItem('tocken');
		if (token) {
			headers = headers.set('Authorization', `Bearer ${token}`)
			headers = headers.set("Accept", "application/json")
     		headers = headers.set('Access-Control-Allow-Origin','*')
		} 
		const authRequest = req.clone({ headers: headers });
		return next.handle(authRequest);
	}
}
