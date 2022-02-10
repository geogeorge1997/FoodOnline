import { Injectable } from '@angular/core';
import { FoodList } from "../../interface/foodlist";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  private foodlistColName = 'FoodList'
  foodlist: Observable<FoodList[]> | undefined

  constructor(
    public firestore:AngularFirestore) {
      /*
      const array = [
        {
          name: 'Bread',
          price: 35,
          dTime: 10,
          quantity: 0
        },{
          name: 'Cake',
          price: 45,
          dTime: 15,
          quantity: 0
        },{
          name: 'Ice Cream',
          price: 55,
          dTime: 5,
          quantity: 0
        },{
          name: 'CupCake',
          price: 50,
          dTime: 12,
          quantity: 0
        },{
          name: 'Bun',
          price: 70,
          dTime: 19,
          quantity: 0
        }
      ]
      array.forEach((doc) => {
        this.firestore.collection(this.foodlistColName).add(doc);
      })
      */
   }

  getFoodList(){
    this.foodlist = this.firestore.collection<FoodList>(this.foodlistColName).valueChanges()
    return this.foodlist
    
  }
}
