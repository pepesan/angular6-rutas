import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';
import {auth} from 'firebase';

class Libro {
  constructor(public key, public value) {}
}

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  // Listado de objetos
  public items: Observable<any[]>;
  // Referencia a ruta
  public listado: AngularFireList<any>;
  datos: any[] = [];
  item: Libro = new Libro('', '');
  key = '';
  nombre = '';
  constructor(protected db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    // this.updateData();
    this.items = this.db.list('/elements').valueChanges();
    this.listado = this.db.list('/elements');
    this.nombre = '';
    // console.log(this.items);
  }

  ngOnInit() {
  }
  updateData() {
    this.db.list('/elements').snapshotChanges(['child_added', 'child_removed', 'child_changed'])
      .subscribe(actions => {
        const miarray = [];
        actions.forEach(action => {

          const objeto = {'key': action.key, 'value': action.payload.val()};
          // objeto =  Observable.create (objeto);
          miarray.push(objeto);
          // console.log(action.type);
          // console.log(action.key);
          // console.log(action.payload.val());
        });
        this.datos = miarray;
        // console.log(this.datos);
      });
  }
  addObject(nombre) {
    // console.log(nombre.value);
    this.listado.push({ nombre: nombre.value}).then((item) => {
      // console.log(item.key);
      this.item = new Libro('', '');
    });
    // console.log(this.objeto);
  }
  removeObject(key) {
    // console.log(key);
    // console.log(this.listado);
    this.listado.remove(key).then(data => {
      // this.updateData();
      this.item = new Libro('', '');
    });
  }
  editObject(key) {
    // console.log(key);
    // console.log(this.listado);
    this.db.object('/elements/' + key).snapshotChanges().subscribe(data =>{
      // console.log(data);
      this.item = new Libro(data.key, data.payload.val());
      // console.log(this.item);
      // this.item.key = data.key;
      // this.item.value = data.payload.val();

    } );
  }
  updateObject(key, value) {
    // console.log(key);
    // console.log(value);
    // console.log(this.listado);
    this.db.object('/elements/' + key).snapshotChanges().subscribe(data => {
      // console.log(data);
      this.item = new Libro(data.key, data.payload.val());
      // console.log(this.item);
      this.listado.set(key, {'nombre': value}).then(datos => {
        this.item.key = '';
        this.item.value.nombre = '';
        // this.updateData();
      });

      // this.item.key = data.key;
      // this.item.value = data.payload.val();

    } );
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
