
import { MovieAppPage } from './../pages/movie-app/movie-app';
import {HttpClientModule} from '@angular/common/http';

import { JsonPage } from './../pages/json/json';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { ScannerPage } from './../pages/scanner/scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';
import { MoviesProvider } from '../providers/movies/movies';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,
    ScannerPage,FlashlightPage,JsonPage,MovieAppPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,
    ScannerPage,FlashlightPage,JsonPage,MovieAppPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,JsonPage,MovieAppPage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
