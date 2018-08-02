import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AgmCoreModule } from '@agm/core';
import { MdlPopoverModule } from '@angular-mdl/popover';

@NgModule({
 imports: [
    AgmCoreModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
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
  icon;
  user;
  mode = false;
  // icon = {
  //     url: require('assets/marker.png'),
  //     scaledSize: {
  //       height: 40,
  //       width: 40
  //     }
  //   };

  public popoverTitle = 'Popover title';
  public popoverMessage = 'Popover description';
  public confirmClicked = false;
  public cancelClicked = false;

  // items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {

    // this.db.list('users').push({
    //   name: 'Osama',
    //   mobile: '0550000002',
    //   role: 'Hajj',
    //   locations: [
    //     {latitude: 21.768126, longitude: 39.155673},
    //     {latitude: 21.769035, longitude: 39.155294},
    //     {latitude: 21.769872, longitude: 39.154983},
    //     {latitude: 21.770739, longitude: 39.154683},
    //   ]
    // });

    // this.db.list('users').push({
    //   name: 'Omar',
    //   mobile: '0552912532',
    //   role: 'Medic',
    //   locations: [{latitude: 21.414749, longitude: 39.891732}]
    // });

    // this.db.list('users').push({
    //   name: 'Ali',
    //   mobile: '0552912532',
    //   role: 'Bus',
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
    const arrayLength = user.locations.length - 1;
    return user.locations[arrayLength].latitude;
  }

  getLong(user) {
    const arrayLength = user.locations.length - 1;
    return user.locations[arrayLength].longitude;
  }

  clickedMarker(name){

  }

  history(user) {
    this.user = user;
    this.viewAll();
  }

  viewAll() {
    this.mode = !this.mode;
    console.log(this.mode);
  }


}
