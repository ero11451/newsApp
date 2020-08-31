import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndmindashboadPageRoutingModule } from './andmindashboad-routing.module';

import { AndmindashboadPage } from './andmindashboad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndmindashboadPageRoutingModule
  ],
  declarations: [AndmindashboadPage]
})
export class AndmindashboadPageModule {}
