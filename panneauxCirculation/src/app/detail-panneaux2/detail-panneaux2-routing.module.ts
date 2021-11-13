import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPanneaux2Page } from './detail-panneaux2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPanneaux2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPanneaux2PageRoutingModule {}
