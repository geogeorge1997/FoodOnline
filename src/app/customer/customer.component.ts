import { Component, OnInit } from '@angular/core';
import { Customer } from '../interface/customer';
import { Order } from '../interface/order';
import { SplashService } from '../spash-screen/service/splash.service';
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

  constructor(
    private customerService: CustomerService,
    private splashService: SplashService) { }

  ngOnInit(): void {
    this.splashService.setSplashStatus(true)
    this.customerService.getCustomerDetails().subscribe(data=>{
      this.customer=data
      this.splashService.setSplashStatus(false)
    })
    this.splashService.setSplashStatus(true)
    this.customerService.getCustomerOrder().subscribe(data=>{
      this.orderlist=data
      this.splashService.setSplashStatus(false)
    })
  }

  onSelect(order: Order,i:number): void {
    // console.log(order,i)
  }
}
