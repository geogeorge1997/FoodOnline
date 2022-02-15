import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodOnline';
  loginVal=true

  constructor(private loginService:LoginService){}

  ngOnInit(): void {

    this.loginService.getLoginStatus()
    .subscribe(status=>{
      this.loginVal=status
    })
  }
}
