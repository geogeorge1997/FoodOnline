import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodList } from '../interface/foodlist';
import { SplashService } from '../spash-screen/service/splash.service';
import { FoodlistService } from './service/foodlist.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foodlist: FoodList[] = [];
  foods:any[]=[]
  totalPrice:number = 0
  totalTime:number =0

  constructor(
    private foodlistServie:FoodlistService,
    private router:Router,
    private splashService: SplashService) { }

  ngOnInit(): void {
    this.splashService.setSplashStatus(true)
    this.foodlistServie.getFoodList()?.subscribe(foodlist=>{
      this.foodlist=foodlist
      this.splashService.setSplashStatus(false)
    })
  }

  didModify(food:FoodList) {
    var flag = 0
    var index = 0
    var del = 0
    for(var i=0;i<this.foods.length;i++){
      if(this.foods[i].name==food.name){
        this.foods[i]=food
        flag = 1
        if(food.quantity! <= 0){
          del = 1
          index=i
        }
      }
    }
    if(this.foods.length==0 || flag == 0){
      this.foods.push(food)
    }
    if(del == 1){
      this.foods.splice(index,1)
    }
  }

  onSelect(): void {
    for (var i=0;i<this.foods.length;i++){
      this.totalPrice = this.totalPrice + this.foods[i].price * this.foods[i].quantity
      if(this.foods[i].dTime>this.totalTime){
        this.totalTime = this.foods[i].dTime
      }
    }

    this.router.navigateByUrl('/myorder', {
      state: {
        foodlist:this.foods,
        totalPrice:this.totalPrice,
        totalTime:this.totalTime
      }
  });
  }

}
