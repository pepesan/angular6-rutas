import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';

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
  objeto;
  nombre;
  datos: any[] = [];
  constructor(protected db: AngularFireDatabase) {



    this.updateData();

    this.items = this.db.list('/elements').valueChanges();
    this.listado = this.db.list('/elements');
    this.nombre = '';
    console.log(this.items);
  }

  ngOnInit() {
  }
  updateData() {
    this.db.list('/elements').snapshotChanges(['child_added'])
      .subscribe(actions => {
        const miarray = [];
        actions.forEach(action => {

          const objeto = {'key': action.key, 'value': action.payload.val()}
          miarray.push(objeto);
          // console.log(action.type);
          // console.log(action.key);
          // console.log(action.payload.val());
        });
        this.datos = Observable.create(miarray);
        // console.log(this.datos);
      });
  }
  addObject(nombre) {
    console.log(nombre.value);
    this.listado.push({ nombre: nombre.value}).then((item) => { console.log(item.key); });
    // console.log(this.objeto);
  }
  removeObject(key) {
    // console.log(key);
    // console.log(this.listado);
    this.listado.remove(key);
    this.updateData();
  }

}
