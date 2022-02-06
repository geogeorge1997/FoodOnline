import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './myorder/myorder.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login',component:LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'register',component:RegisterComponent },
  { path:'customer',component:CustomerComponent, canActivate:[AuthGuard] },
  { path:'foodlist',component:FoodlistComponent },
  { path:'myorder',component:MyorderComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
