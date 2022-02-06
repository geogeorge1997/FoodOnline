import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interface/customer';
import { Order } from '../interface/order';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  //orderlist: Observable<Order[]> | undefined
  //customer: Observable<Customer[]> | undefined 

  orderlist: Order[] = [];
  customer: Customer[] = [];

  orderedFood?: Order

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails().subscribe(data=>{
      this.customer=data
      console.log(this.customer)
    })
    this.customerService.getCustomerOrder().subscribe(data=>{
      this.orderlist=data
      console.log(this.orderlist)
    })
    /*
    this.customer.subscribe(data=>{
      console.log(data)
    })
    this.orderlist.subscribe(data=>{
      console.log(data)
    })
    */
  }

  onSelect(order: Order,i:number): void {
    console.log(order,i)
    //this.orderedFood = food;
  }

}
