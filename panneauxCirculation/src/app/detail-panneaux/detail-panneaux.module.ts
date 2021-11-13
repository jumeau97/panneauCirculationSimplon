import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPanneauxPageRoutingModule } from './detail-panneaux-routing.module';

import { DetailPanneauxPage } from './detail-panneaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPanneauxPageRoutingModule
  ],
  declarations: [DetailPanneauxPage]
})
export class DetailPanneauxPageModule {}
