import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanneauxPageRoutingModule } from './panneaux-routing.module';

import { PanneauxPage } from './panneaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanneauxPageRoutingModule
  ],
  declarations: [PanneauxPage]
})
export class PanneauxPageModule {}
