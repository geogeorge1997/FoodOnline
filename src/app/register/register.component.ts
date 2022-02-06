import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from "../interface/customer";
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer = {
    name : '',
    address : '',
    nameid : '',
    email : '',
    password : ''
  }

  email:string=''
  password:string=''
  name:string=''
  address:string=''

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.customer.name=this.name
    this.customer.address=this.address
    this.customer.email=this.email
    this.customer.password=this.password
    this.customer.nameid=this.email
    this.loginService.register(this.customer)
  }

  onLogin() {
    this.router.navigate(['login'])
  }

}
