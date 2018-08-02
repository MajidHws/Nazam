import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { AgmCoreModule } from '@agm/core';

@NgModule({
 imports: [
    AgmCoreModule
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items;
  roles;
  title = 'My first AGM project';
  lat = 21.3891;
  lng = 39.8579;
  zoom = 12;

  // items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {

    // this.db.list('users').push({
    //   name: 'Majid',
    //   mobile: '0552912532',
    //   role: 'Hajj',
    //   locations: [{latitude: 21.414000, longitude: 39.894822}]
    // });

    // this.db.list('users').push({
    //   name: 'Omar',
    //   mobile: '0552912532',
    //   role: 'Hajj',
    //   locations: [{latitude: 21.414749, longitude: 39.891732}]
    // });

    // this.db.list('users').push({
    //   name: 'Ali',
    //   mobile: '0552912532',
    //   role: 'Hajj',
    //   locations: [{latitude: 21.412062, longitude: 39.893680}]
    // });

    // this.db.list('roles').push({
    //   role: 'Hajj'
    // });

    // this.db.list('roles').push({
    //   role: 'Bus'
    // });

    // this.db.list('roles').push({
    //   role: 'Paramedic'
    // });

    db.list('users').valueChanges().pipe(map(res => res)).subscribe(res => {this.items = res; });
    db.list('roles').valueChanges().pipe(map(res => res)).subscribe(res => {this.roles = res; });
    // this.items = this.db.list('users').valueChanges();
    // db.list('users').snapshotChanges().pipe(map( d => {})).subscribe((data) => {this.items = data; });

  }

  getLat(user) {
    return user.locations[0].latitude;
  }

  getLong(user) {
    return user.locations[0].longitude;
  }

  clickedMarker(name){

  }


}
