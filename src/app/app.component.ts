import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'myApp';

  constructor(private loginService:SocialAuthService){}

  ngOnInit(): void {
    this.signInWithGoogle()
  }

  signInWithGoogle(): void {
    this.loginService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        
      }
    );
  }
}
