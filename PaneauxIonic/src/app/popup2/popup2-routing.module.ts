import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Popup2Page } from './popup2.page';

const routes: Routes = [
  {
    path: '',
    component: Popup2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Popup2PageRoutingModule {}
