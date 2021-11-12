import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanneauxPage } from './panneaux.page';

const routes: Routes = [
  {
    path: '',
    component: PanneauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanneauxPageRoutingModule {}
