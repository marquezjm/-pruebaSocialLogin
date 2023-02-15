import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  socialUser = {} as SocialUser
  userLogged = {} as SocialUser
  isLogged: boolean = false

  constructor(private loginService:SocialAuthService,private router:Router){}
  ngAfterViewInit(): void {
    this.loginService.authState.subscribe(
      dato=>{
        this.userLogged = dato
        this.isLogged = this.userLogged != null
        console.log(dato);
        if(this.isLogged){
          this.router.navigateByUrl('/')
        }else{
          this.router.navigateByUrl('/login')
        }
      }
    )
  }

  ngOnInit(): void {
  }

  loginWithFacebook(){
  }

}
