import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public router: Router
  ) {
    let tab = document.getElementsByTagName("ion-label");
    console.log(tab);
  }

  accueil(){
    this.router.navigate(['']);
  }

}
