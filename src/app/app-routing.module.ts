import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { LoginGuardGuard } from './login-guard/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyorderComponent } from './myorder/myorder.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login',component:LoginComponent, canActivate:[LoginGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'register',component:RegisterComponent },
  { path:'customer',component:CustomerComponent, canActivate:[AuthGuard] },
  { path:'foodlist',component:FoodlistComponent },
  { path:'myorder',component:MyorderComponent, canActivate:[AuthGuard] },
  { path:'logout', component:LogoutComponent},
  { path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
