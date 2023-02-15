import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {

  socialUser = {} as SocialUser
  userLogged = {} as SocialUser
  isLogged: boolean = false
  subscription = {} as Subscription

  constructor(private loginService:SocialAuthService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription=this.loginService.authState.subscribe(
      dato=>{
        this.userLogged = dato
        this.isLogged = this.userLogged != null
        console.log(dato);
      }
    )
  }

  logout(){
    this.loginService.signOut()
  }

}
