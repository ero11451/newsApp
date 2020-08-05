import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./page/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'sharing',
    loadChildren: () => import('./page/sharing/sharing.module').then( m => m.SharingPageModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./page/live/live.module').then( m => m.LivePageModule)
  },
  {
    path: 'assistant',
    loadChildren: () => import('./page/assistant/assistant.module').then( m => m.AssistantPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
