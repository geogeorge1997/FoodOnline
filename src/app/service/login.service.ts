import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from '@angular/router';

import { Customer } from "../interface/customer";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isloggedIn = false;
  private email = ''
  private customerCollection = 'Customers'

  constructor(
    private ngZone:NgZone,
    private router:Router,
    public fireAuth:AngularFireAuth,
    public fireStore:AngularFirestore) { }

  userEmail(){
    return this.email
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  async login(email:string,password:string){
    var result =  await this.fireAuth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.router.navigate(['customer']);
      this.email=email
      this.isloggedIn=true
      // console.log(result)
    }).catch((error) => {
      this.isloggedIn=false
      window.alert(error.message)
    })    
  }

  async register(customer:Customer){
    const email=customer.email
    const password=customer.password
    var result = await this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      this.fireStore.collection(this.customerCollection).add(customer)
      // console.log('Success')
      this.router.navigate(['customer'])
      this.email=email
      this.isloggedIn=true
    }).catch((error)=>{
      window.alert(error.message);
      this.isloggedIn=false
    })
  }
}
