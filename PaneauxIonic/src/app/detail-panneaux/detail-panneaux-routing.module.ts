import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPanneauxPage } from './detail-panneaux.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPanneauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPanneauxPageRoutingModule {}
