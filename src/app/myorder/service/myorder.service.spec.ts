import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

import { MyorderService } from './myorder.service';

describe('MyorderService', () => {
  let service: MyorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
      ],
      providers:[
        MyorderService
      ]
    });
    service = TestBed.inject(MyorderService);
  });

  it('should be created', () => {
    const service = TestBed.inject(MyorderService)
    expect(service).toBeTruthy();
  });
});
