import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialUser = {} as SocialUser
  userLogged = {} as SocialUser
  isLogged: boolean = false
  subscription = {} as Subscription

  constructor(private loginService:SocialAuthService,private cd:ChangeDetectorRef) { }

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

    this.cd.detectChanges()
  }

  ngOnInit(): void {
  }

}
