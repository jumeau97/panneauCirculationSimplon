import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Logs } from 'selenium-webdriver';
import { PopoverPage } from '../popover/popover.page';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public data ;
  public choices = [];
  public cards: any;
  public container: any;
  public score: any = 0;
  quizChoice: any;
  constructor(
    public mService: ServicesService,
    public popOverCtrl: PopoverController
  ) {

  }
  ngOnInit(): void {
    this.data=this.mService.getCirculation();
    this.launchGame();
  }

  launchGame(): void {
    this.random(this.data);
    this.container = document.getElementById('container');
    for (const choice of this.choices){
      const card = document.createElement('ion-col');
      card.setAttribute('size', '6');
      card.classList.add('card');
      const image = document.createElement('img');
      image.classList.add('image');
      image.setAttribute('src', choice.image);
      image.addEventListener('click', () => {
        this.onAnswer(choice.answer);
      });


      card.appendChild(image);
      this.container.appendChild(card);
    }
  }

  clearContainer(){
    this.cards = document.getElementsByClassName('card');
      for (const card  of this.cards) {
        card.parentNode.removeChild(card);
      }
  }
  setScore(reward: number){
    this.score += reward;
    const scoreValue = document.getElementsByTagName('i')[0];
    // if( this.score <= 0){
    //   scoreValue.textContent = 
    // }else{
    //   scoreValue.textContent = this.score;
    // }
    scoreValue.textContent = this.score;
   
    console.log(this.score);
    
  }
  random(rand: any) {
    const keys = Object.keys(rand);
    this.choices = [];
    while (this.choices.length < 4) {
      const nombre = rand[keys[keys.length * Math.random() << 0]];
      if (!this.choices.includes(nombre)) {
        this.choices.push(nombre);
      }

    }
    const quizkeys = Object.keys(this.choices);
    this.quizChoice = this.choices[quizkeys[quizkeys.length * Math.random() << 0]];
    console.log('Q : ',this.quizChoice);
    console.log('R : ', this.choices);
    
  }

  onAnswer(d) {
    if (d === this.quizChoice.answer) {
      this.mService.valid=true;
      this.presentAlert(d);
      this.setScore(10);
    }
    else {
      this.mService.valid=false;
      this.presentAlert(d);
      this.setScore(-5);

    }
    this.launchGame();
  }

  async presentAlert(ev: any) {
    const popover = await this.popOverCtrl.create({
      component: PopoverPage,
      cssClass:'my-custom-class',
      event:ev,
      translucent:true

  });
 await popover.present();
 this.clearContainer();
 const{role}=await popover.onDidDismiss();
//  this.clearContainer();
}


}