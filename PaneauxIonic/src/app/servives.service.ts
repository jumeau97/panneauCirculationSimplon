import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServivesService {
  public listePanneaux: any;
  public panneau: any;
  public listquiz = environment.quiz;

  constructor() { }

  getCirculation(){
    return this.listquiz;
  }

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
