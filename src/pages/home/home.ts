import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertController: AlertController) {
  }

  showWarning() {
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
            this.navCtrl.push(ContactPage, {}, {animation: 'ios-transition'});
          }
        }
      ]
    });
    confirm.present()
  }

}
