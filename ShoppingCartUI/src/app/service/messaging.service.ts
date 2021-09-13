import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  userId: Subject<string> = new Subject<string>();
  role: Subject<string> = new Subject<string>();

  constructor() { }
  setUserId(userId:string){
    this.userId.next(userId);
  }
  setRole(role:string){
    this.role.next(role);
  }

}
