import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { SplashService } from '../spash-screen/service/splash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=''
  password:string=''

  constructor(
    private loginService:LoginService,
    private router: Router,
    private splashService : SplashService) { }

  ngOnInit(): void {
    this.splashService.setSplashStatus(false)
  }

  onSubmit() { 
    this.loginService.login(this.email,this.password)
   }

   onRegister(){
     this.router.navigate(['register'])
   }

}
