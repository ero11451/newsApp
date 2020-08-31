import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndmindashboadPage } from './andmindashboad.page';

const routes: Routes = [
  {
    path: '',
    component: AndmindashboadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndmindashboadPageRoutingModule {}
