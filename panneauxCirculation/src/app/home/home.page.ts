import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PopupComponent } from '../popup/popup.component';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public panneaux = environment.panneaux;
  constructor(
    public popover: PopoverController,
    public service: ServicesService,
    public router: Router
  ) {}


  async showConfirm(data: any) {
    console.log('Data', data);
    this.service.setByPanneauPopup(data);
    const popover = await this.popover.create({
      component: PopupComponent,
      cssClass:'my-custum-class',
      event: data,
      translucent: true
    });
    await popover.present();

    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

}
