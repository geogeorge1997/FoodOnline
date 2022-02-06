import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodList } from '../interface/foodlist';
import { LoginService } from '../service/login.service';
import { FoodlistService } from './service/foodlist.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  foodlist: FoodList[] = [];
  selectedFood?: FoodList

  constructor(private foodlistServie:FoodlistService,
    private router:Router) { }

  ngOnInit(): void {
    this.foodlistServie.getFoodList()?.subscribe(foodlist=>{
      this.foodlist=foodlist
    })
  }

  onSelect(food: FoodList,i:number): void {
    console.log(food,i)
    this.selectedFood = food;

    this.router.navigateByUrl('/myorder', {
      state: {selectedFood: this.selectedFood}
  });
  }

}
