import { Component } from '@angular/core';
import { imagesDetails } from 'src/environments/environment';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public panneaux: any;

  constructor() {
    this.panneaux = imagesDetails;
    // const panneau = createAnimation()
    // .addElement(document.querySelector('.acc_panneau'))
    // .duration(1500)
    // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    // .fromTo('opacity', '1', '0.2');

    // const parent = createAnimation()
    //   .duration(2000)
    //   .iterations(Infinity)
    //   .addAnimation([panneau]);
  }

}
