import { Component, OnInit } from '@angular/core';
import { SplashService } from './service/splash.service';

@Component({
  selector: 'app-spash-screen',
  templateUrl: './spash-screen.component.html',
  styleUrls: ['./spash-screen.component.css']
})
export class SpashScreenComponent implements OnInit {

  constructor(private splashService: SplashService) { }

  public showSplash = true;

  ngOnInit(): void {

    this.splashService.getSplashStatus()
    .subscribe(status=>{
      this.showSplash=status
    })
  }
}

