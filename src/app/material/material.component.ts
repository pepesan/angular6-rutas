import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  myData;
  constructor(public http: HttpClient) {
    this.myData = this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise();
  }

  ngOnInit() {
  }

}
