import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  socialUser = {} as SocialUser
  userLogged = {} as SocialUser
  isLogged: boolean = false
  subscription = {} as Subscription

  googleLoginOptions = {
    scope: 'profile email'
  };

  constructor(private loginService:SocialAuthService){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngAfterViewInit(): void {
    this.subscription=this.loginService.authState.subscribe(
      dato=>{
        this.userLogged = dato
        this.isLogged = this.userLogged != null
        console.log(dato);
      }
    )
  }

  ngOnInit(): void {
  }

  loginWithFacebook(){
    this.loginService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  

}
