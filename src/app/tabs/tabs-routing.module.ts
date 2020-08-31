import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../page/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'sharing',
        loadChildren: () => import('../page/iReport/sharing/sharing.module').then(m => m.SharingPageModule)
      },
      {
        path: 'live',
        loadChildren: () => import('../page/live/live.module').then(m => m.LivePageModule)
      },
      {
        path: 'assistant',
        loadChildren: () => import('../page/assistant/assistant.module').then(m => m.AssistantPageModule)
      },
      {
        path: 'Admin',
        loadChildren: () => import('../page/andmindashboad/andmindashboad.module').then(m => m.AndmindashboadPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
