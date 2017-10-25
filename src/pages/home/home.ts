import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertController: AlertController) {

  }

  gotoAboutPage(){
    this.navCtrl.push(AboutPage);
  }

  doConfirm() {
    let confirm = this.alertController.create({
      title: 'Terms&Conditions?',
      message: '*T&C*',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
