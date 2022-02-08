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

  orderlist: Order[] = [];
  customer: Customer[] = [];

  orderedFood?: Order

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails().subscribe(data=>{
      this.customer=data
      // console.log(this.customer)
    })
    this.customerService.getCustomerOrder().subscribe(data=>{
      this.orderlist=data
      // console.log(this.orderlist[1].foodlist)
    })
  }

  onSelect(order: Order,i:number): void {
    // console.log(order,i)
  }

}
