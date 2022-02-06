import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Order } from '../interface/order';
import { LoginService } from '../service/login.service';
import { MyorderService } from './service/myorder.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  // state$: Observable<object> | undefined;
  foodname:string=''
  foodprice:number=0
  quantity:number=1
  totalPrice:number=0
  orderid:string=''
  useremail:string=''
  date:Date | undefined

  order:Order={
    foodname:'',
    foodprice:0,
    quantity:1,
    totalPrice:0,
    orderid:'',
    useremail:'',
    date:new Date()
  }

  constructor(
    public router:Router,
    private loginService:LoginService,
    private myOrderService:MyorderService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    
    this.useremail=this.loginService.userEmail()
    console.log(this.useremail)

    if(history.state.selectedFood){
      this.foodname=history.state.selectedFood.name
      this.foodprice=history.state.selectedFood.price
      this.totalPrice = this.quantity*this.foodprice
    }
    else{
      this.router.navigate(['foodlist'])
    }
    console.log(this.foodname,this.foodprice)
    
  }

  didModify() {
    this.totalPrice = this.quantity*this.foodprice
  }

  submitted = false;

  onSubmit() { 
    this.order.foodname=this.foodname
    this.order.foodprice=this.foodprice
    this.order.quantity=this.quantity
    this.order.totalPrice=this.totalPrice
    this.order.useremail=this.useremail
    this.order.date=new Date()
    let _date =this.datepipe.transform(this.order.date, 'M/d/yyyy-h:mm-a')
    this.order.orderid=this.useremail+'-'+_date
    this.submitted = true;
    this.myOrderService.submitOrder(this.order)
   }
}
