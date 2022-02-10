import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { FoodlistService } from './foodlist.service';

describe('FoodlistService', () => {
  let service: FoodlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
      ]
    });
    service = TestBed.inject(FoodlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
