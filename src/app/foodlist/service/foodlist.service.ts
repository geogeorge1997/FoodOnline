import { Injectable } from '@angular/core';
import { FoodList } from "../../interface/foodlist";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  private foodlistColName = 'FoodList'
  foodlist: Observable<FoodList[]> | undefined

  constructor(
    public firestore:AngularFirestore) {
      this.foodlist = this.firestore.collection<FoodList>(this.foodlistColName).valueChanges()
      console.log(this.foodlist)
   }

  getFoodList(){

    return this.foodlist
    
  }
}
