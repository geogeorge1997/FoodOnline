import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashService {
  status = new Subject<boolean>()
  obsfrom1 = new Observable<string>()

  constructor(){}

  getSplashStatus(): Observable<boolean>{
    return this.status.asObservable()
  }

  setSplashStatus(data:boolean){
    this.status.next(data)
  }
}


