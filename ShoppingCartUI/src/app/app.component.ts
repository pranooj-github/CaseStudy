import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCartUI';
  showNavbar : boolean = true;
  // constructor(private router:Router){
  //   router.events.forEach((event)=>{
  //     if(event instanceof NavigationStart){
  //       if((event['url'] =='/login') || event['url'] == '/register'){
  //         this.showNavbar = false;
  //       }
  //     }
  //   })
  // }
}
