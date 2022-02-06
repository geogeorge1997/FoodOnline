import { Injectable } from '@angular/core';
import { Order } from 'src/app/interface/order';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  private orderlistColName = 'OrderList'
  orderlistCollection!: AngularFirestoreCollection<Order>;
  orderlist: Observable<Order[]> | undefined

  constructor(
    public fireStore:AngularFirestore
  ) { }

  submitOrder(order:Order){
    this.fireStore.collection(this.orderlistColName).add(order)
    console.log(order)
    this.getOrdersLastMinute()

  }

  async getOrdersLastMinute(){

    var fiveMinuteAgo = new Date( Date.now() - 1000 * 60 * 5 );

    this.orderlist = this.fireStore.collection<Order>(this.orderlistColName,
      ref=>ref.where('date','>=',fiveMinuteAgo)).valueChanges()

    // console.log(this.orderlistCollection.valueChanges())
    this.orderlist?.subscribe(data=>{
      console.log(data)
    })

    // const allCapitalsRes = await citiesRef.
  }
}
