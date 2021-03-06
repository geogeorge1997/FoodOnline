import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/service/login.service';
import { Customer } from "../../interface/customer";
import { Order } from 'src/app/interface/order';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private orderlistColName = 'OrderList'
  private customerCollection = 'Customers'
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
      ref=>ref.where('useremail','==',this.email).where('status','==','Confirmed')).valueChanges()
  }
}
