import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
panneauPopup: any;
  constructor(
    public service: ServicesService,
    public router: Router,
    private popoverC:PopoverController
  ) { }

  ngOnInit() {
    this.panneauPopup = this.service.getByPanneauPopup();
    console.log(this.panneauPopup);
  }


  async detailPanneau(data: any){
    console.log("detail Data ", data);
    await this.popoverC.dismiss();
    this.service.setPanneau(data);  
    this.router.navigate(['detail-panneaux']);
    // this.panneauPopup();
  }


  async retour(){
    await this.popoverC.dismiss();
  }

}
