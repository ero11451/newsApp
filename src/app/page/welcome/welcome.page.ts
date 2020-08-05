import { IonhelperService } from './../../helper/ionhelper.service';
import { LoginPage } from './../login/login.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private ion:IonhelperService
  ) { }

  ngOnInit() {
  }
  // goToAuth() {
  //   this.router.navigate(["login"])
  //   console.log("this is very hard thing")
  // }
    goToAuth() { 
       this.ion.ionModal(LoginPage,'welcome')
      }
}
