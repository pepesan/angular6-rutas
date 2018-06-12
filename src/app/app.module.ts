import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { FirebaseComponent } from './firebase/firebase.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
export const environment = {
  production: false,
  firebase: {
    // Colocar aquí los datos de la consola de Firebase
    apiKey: 'APIKEY',
    authDomain: 'angularfirebase-63b24.firebaseapp.com',
    databaseURL: 'https://angularfirebase-63b24.firebaseio.com',
    projectId: 'angularfirebase-63b24',
    storageBucket: 'angularfirebase-63b24.appspot.com',
    messagingSenderId: '183553343153'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
