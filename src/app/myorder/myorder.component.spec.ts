import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { MyorderComponent } from './myorder.component';
import { MyorderService } from './service/myorder.service';

describe('MyorderComponent', () => {
  let component: MyorderComponent;
  let fixture: ComponentFixture<MyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
      declarations: [ MyorderComponent ],
      providers: [ MyorderService, DatePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
