import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
public listePanneaux: any;
public panneau: any;
  constructor() { }

  setPanneau(data: any){
    this.listePanneaux = data
  }

  getPanneau(){
    return this.listePanneaux;
  }

  setByPanneauPopup(data: any){
    this.panneau = data
  }

  getByPanneauPopup(){
    return this.panneau;
  }


}
