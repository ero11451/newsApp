import { IRegisterPage } from './../i-register/i-register.page';
import { ILoginPage } from './../i-login/i-login.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharingPage } from './sharing.page';

const routes: Routes = [
  {
    path: '',
    component: SharingPage
  },
  {
    path: 'login',
    component: ILoginPage
  },
  {
    path: 'register',
    component: IRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharingPageRoutingModule {}
