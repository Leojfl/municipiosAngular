import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Firebase
 import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
// Login
import {LoginComponent} from './components/login/login.component';

// Rective form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Alert
// @ts-ignore
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MunicipalitiesComponent} from './components/municipalities/municipalities.component';
// maps
import {AgmCoreModule} from '@agm/core';
// icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {from} from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppComponent,
    MunicipalitiesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCUT95A6q9q6xrv0aZMil7zPVP7qCpSMrw",
      authDomain: "municipios-igecem.firebaseapp.com",
      databaseURL: "https://municipios-igecem.firebaseio.com",
      projectId: "municipios-igecem",
      storageBucket: "",
      messagingSenderId: "753040810631",
      appId: "1:753040810631:web:2b1197e61217e228234e22"
    }),
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn',
    }),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuYXawrzjug2cr4cJpHKqO26Bv9c8n4W8'
    }),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
