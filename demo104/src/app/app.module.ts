import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 export const firebaseConfig = {
  apiKey: "AIzaSyC6N_fteKtJ4a0RJf0Tvy94ynIO8sasmzA",
  authDomain: "tarea-accesodedatos.firebaseapp.com",
  databaseURL: "https://tarea-accesodedatos.firebaseio.com",
  projectId: "tarea-accesodedatos",
  storageBucket: "tarea-accesodedatos.appspot.com",
  messagingSenderId: "77186703078",
  appId: "1:77186703078:web:2ef1ac4a0f725d83f92527",
  measurementId: "G-5M2QXXFZX1"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig,'demo104'),
  AngularFireDatabaseModule],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
