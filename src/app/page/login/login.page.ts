import { HomePage } from './../home/home.page';
import { TabsPage } from './../../tabs/tabs.page';

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private ion: IonhelperService,
    private googlePlus: GooglePlus,
    private storage: Storage,
    ) { }



  // Or to get a key/value pair
  // storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });
  ngOnInit() {
  }
loginWithGoogle(){
  this.googlePlus.login({}).then(
    user => {
      this.storage.set('user', user);
      this.ion.ionModal(HomePage, user + 'this as ');
    })
   .catch(err => this.ion.ionToast(err, 2000 , 'danger'));
 }

}
