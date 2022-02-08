import { Injectable } from '@angular/core';
import { Order } from 'src/app/interface/order';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  private orderlistColName = 'OrderList'
  orderlist: Observable<Order[]> | undefined

  constructor(
    public fireStore:AngularFirestore
  ) { }

  submitOrder(order:Order){
    const docId = this.fireStore.createId()
    order.orderId=docId
    this.fireStore.collection(this.orderlistColName).doc(docId).set(order)
    this.getOrdersLastMinute()

  }

  async getOrdersLastMinute(){

    var fiveMinuteAgo = new Date( Date.now() - 1000 * 60 * 5 );

    this.orderlist = this.fireStore.collection<Order>(this.orderlistColName,
      ref=>ref.where('date','>=',fiveMinuteAgo).where('status','==','Placed')).valueChanges()

   
    this.orderlist?.subscribe(data=>{
      for(let i=0;i<data.length;i++){
        console.log(data.length)
        console.log(data[i])
        this.fireStore.collection<Order>(this.orderlistColName).doc(data[i].orderId).update({status:'Confirmed'})
      }
    })
    

  }
}
