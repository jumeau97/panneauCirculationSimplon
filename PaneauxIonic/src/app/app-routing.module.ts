import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./popup/popup.module').then( m => m.PopupPageModule)
  },
  {
    path: 'detail-panneaux',
    loadChildren: () => import('./detail-panneaux/detail-panneaux.module').then( m => m.DetailPanneauxPageModule)
  },
  {
    path: 'detail-panneaux2',
    loadChildren: () => import('./detail-panneaux2/detail-panneaux2.module').then( m => m.DetailPanneaux2PageModule)
  },
  {
    path: 'popup2',
    loadChildren: () => import('./popup2/popup2.module').then( m => m.Popup2PageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
