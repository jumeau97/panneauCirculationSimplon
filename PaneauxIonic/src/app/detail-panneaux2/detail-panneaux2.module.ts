import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPanneaux2PageRoutingModule } from './detail-panneaux2-routing.module';

import { DetailPanneaux2Page } from './detail-panneaux2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPanneaux2PageRoutingModule
  ],
  declarations: [DetailPanneaux2Page]
})
export class DetailPanneaux2PageModule {}
