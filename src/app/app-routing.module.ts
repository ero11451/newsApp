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
    loadChildren: () => import('./page/iReport/sharing/sharing.module').then( m => m.SharingPageModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./page/live/live.module').then( m => m.LivePageModule)
  },
  {
    path: 'assistant',
    loadChildren: () => import('./page/assistant/assistant.module').then( m => m.AssistantPageModule)
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('./page/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'home/:category',
    loadChildren: () => import('./page/category-details/category-details.module').then( m => m.CategoryDetailsPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

  {
    path: 'andmindashboad',
    loadChildren: () => import('./../app/page/andmindashboad/andmindashboad.module').then( m => m.AndmindashboadPageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./page/menu/menu.module').then( m => m.MenuPageModule)
  }, 
 
  {
    path: 'edit',
    loadChildren: () => import('./page/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./page/iReport/upload/upload.module').then( m => m.UploadPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
