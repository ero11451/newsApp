import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IRegisterPage } from './i-register.page';

const routes: Routes = [
  {
    path: '',
    component: IRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IRegisterPageRoutingModule {}
