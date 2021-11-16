import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Popup2PageRoutingModule } from './popup2-routing.module';

import { Popup2Page } from './popup2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Popup2PageRoutingModule
  ],
  declarations: [Popup2Page]
})
export class Popup2PageModule {}
