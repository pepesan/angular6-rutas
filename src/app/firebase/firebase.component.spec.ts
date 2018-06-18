import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseComponent } from './firebase.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../app.module';



describe('FirebaseComponent', () => {
  let component: FirebaseComponent;
  let fixture: ComponentFixture<FirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseComponent ],
      imports: [ RouterTestingModule , AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
