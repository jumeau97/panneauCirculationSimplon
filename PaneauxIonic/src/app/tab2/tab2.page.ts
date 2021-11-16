import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { PopupPage } from '../popup/popup.page';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public panneaux = environment.panneaux;
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides: IonSlides){
    slides.startAutoplay();

  }
  constructor(
    public popover: PopoverController,
    public service: ServicesService,
    public router: Router
  ) {}

  async showConfirm(data: any) {
    console.log('Data', data);
    this.service.setByPanneauPopup(data);
    const popover = await this.popover.create({
      component: PopupPage,
      cssClass:'my-custum-class',
      event: data,
      translucent: true
    });
    await popover.present();

    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }
}
