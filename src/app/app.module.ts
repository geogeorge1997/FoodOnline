// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MyorderComponent } from './myorder/myorder.component';

import { MaterialModule } from "./material.module";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoginService } from './service/login.service';
import { FoodlistService } from './foodlist/service/foodlist.service';
import { CustomerService } from './customer/service/customer.service';
import { MyorderService } from './myorder/service/myorder.service';


import { URL as DATABASE_URL } from '@angular/fire/compat/database';
import { ORIGIN as FUNCTIONS_ORIGIN } from '@angular/fire/compat/functions';
import { SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    FoodlistComponent,
    MyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    LoginService,
    FoodlistService,
    CustomerService,
    MyorderService,

    {
      provide: DATABASE_URL,
      useValue: environment.useEmulators ? `http://localhost:9000?ns=${environment.firebaseConfig.projectId}` : undefined
    },
    { provide: FIRESTORE_SETTINGS, useValue: environment.useEmulators ? { host: 'localhost:8080', ssl: false } : {} },
    { provide: FUNCTIONS_ORIGIN, useValue: environment.useEmulators ? 'http://localhost:5001' : undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
