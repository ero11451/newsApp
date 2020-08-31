import { MenuPageModule } from './page/menu/menu.module';
import { HttpClientModule } from "@angular/common/http";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { NgPipesModule } from 'ngx-pipes';
import {ShortenPipe} from 'ngx-pipes';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgPipesModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    MenuPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    ShortenPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
