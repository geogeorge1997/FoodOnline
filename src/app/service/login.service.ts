import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Customer } from "../interface/customer";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isloggedIn = false;
  private email = ''
  private customerCollection = 'Customers'

  loginV = new Subject<boolean>()

  constructor(
    private router:Router,
    public fireAuth:AngularFireAuth,
    public fireStore:AngularFirestore) {
      fireAuth.user.subscribe((user)=>{
        if(user!=null){
          this.router.navigate(['customer']);
          this.email=user.email!
          this.setLoginStatus(false)
          this.isloggedIn=true
        }
      })
     }

    getLoginStatus(): Observable<boolean>{
      return this.loginV.asObservable()
    }
  
    setLoginStatus(data:boolean){
      this.loginV.next(data)
    }

  userEmail(){
    return this.email
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.router.navigate(['customer']);
      this.email=email
      this.setLoginStatus(false)
      this.isloggedIn=true
    }).catch((error) => {
      this.setLoginStatus(true)
      this.isloggedIn=false
      window.alert(error.message)
    })    
  }

  register(customer:Customer){
    const email=customer.email
    const password=customer.password
    this.fireAuth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      this.fireStore.collection(this.customerCollection).add(customer)
      this.router.navigate(['customer'])
      this.email=email
      this.setLoginStatus(false)
      this.isloggedIn=true
    }).catch((error)=>{
      window.alert(error.message);
      this.setLoginStatus(true)
      this.isloggedIn=false
    })
  }

  logut(){
    this.isloggedIn=false
    this.setLoginStatus(true)
  }
}
