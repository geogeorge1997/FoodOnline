import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    // console.log(this.email,this.password)
    this.loginService.login(this.email,this.password)
   }

   onRegister(){
     this.router.navigate(['register'])
   }

}
