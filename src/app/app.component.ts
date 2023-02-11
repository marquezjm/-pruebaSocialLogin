import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  
  title = 'myApp';

  googleLoginOptions = {
    scope: 'profile email'
  };

  constructor(private loginService:SocialAuthService){}
  ngAfterViewInit(): void {
    this.loginService.authState.subscribe(dato=>{
      console.log(dato);
      
    })
  }

  ngOnInit(): void {
  }

}
