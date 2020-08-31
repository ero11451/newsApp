import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ILoginPageRoutingModule } from './i-login-routing.module';

import { ILoginPage } from './i-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ILoginPageRoutingModule
  ],
  declarations: [ILoginPage]
})
export class ILoginPageModule {}
