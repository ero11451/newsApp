import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IRegisterPageRoutingModule } from './i-register-routing.module';

import { IRegisterPage } from './i-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IRegisterPageRoutingModule
  ],
  declarations: [IRegisterPage]
})
export class IRegisterPageModule {}
