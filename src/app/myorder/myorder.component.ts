import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  foodlist:[]=[]
  totalPrice:number=0
  orderid:string=''
  useremail:string=''
  date:Date | undefined
  status:string = 'Placed'
  dTime:number=0

  order:Order={
    foodlist:[    
    ],
    totalPrice:0,
    orderId:'',
    useremail:'',
    date:new Date(),
    status:'',
    dTime:0
  }

  constructor(
    public router:Router,
    private loginService:LoginService,
    private myOrderService:MyorderService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    
    this.useremail=this.loginService.userEmail()
    if(history.state.foodlist.length>0){
      console.log(history.state.foodlist)
      this.foodlist=history.state.foodlist
      this.totalPrice=history.state.totalPrice
      this.dTime=history.state.totalTime
    }
    else{
      this.router.navigate(['foodlist'])
    }
    console.log(this.foodlist,this.totalPrice,this.dTime)
    
  }

  submitted = false;

  onSubmit() { 
    this.order.foodlist=this.foodlist
    this.order.dTime=this.dTime
    this.order.totalPrice=this.totalPrice
    this.order.useremail=this.useremail
    this.order.date=new Date()
    this.order.status = this.status
    //let _date =this.datepipe.transform(this.order.date, 'M/d/yyyy-h:mm-a')
    this.submitted = true;
    this.myOrderService.submitOrder(this.order)
   }

   ngOnDestroy(){
     console.log("Destroyed")
   }
}
