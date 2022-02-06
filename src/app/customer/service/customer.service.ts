import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

import { Customer } from "../../interface/customer";
import { Order } from 'src/app/interface/order';
import { LoginService } from 'src/app/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private orderlistColName = 'OrderList'
  private customerCollection = 'Customers'

  //orderlistCollection!: AngularFirestoreCollection<Order>;


  public email:string=''

  constructor(
    public fireStore:AngularFirestore,
    private loginService:LoginService) { 
      this.email=this.loginService.userEmail()
    }

  getCustomerDetails(): Observable<Customer[]> {

    return this.fireStore.collection<Customer>(this.customerCollection,
      ref=>ref.where('email','==',this.email)).valueChanges()
  }

  getCustomerOrder(): Observable<Order[]> {

    return this.fireStore.collection<Order>(this.orderlistColName,
      ref=>ref.where('useremail','==',this.email)).valueChanges()
  }
}
