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
      title: 'Terms & Conditions?',
      message: 'By agreeing, you ensure that you have the necessar requirements:<br><br>\n' +
      '* Singapore citizen<br>\n' +
      '* Minimum age of 18 years old due to legislative requirements<br>\n' +
      '* Fulfil the minimum height requirement of at least 1.58m for females and 1.65m for males in order to carry out safety and emergency procedures onboard<br>\n' +
      '* Degree/Diploma (those who are graduating before April 2018 may also apply if they have any of the two educational qualifications below)<br>\n' +
      '\n' +
      'OR\n' +
      '\n' +
      '*At least 2 GCE \'A\'-level  (H2 level) credits and 2 \'AO\'-level (H1 level) credits including General Paper in the GCE \'A\'-level examination<br>\n' +
      '\n' +
      'OR\n' +
      '\n' +
      '*At least 5 GCE \'O\'-level credits including English and working experience<br> \n' +
      '\n' +
      'OR\n' +
      '\n' +
      '*Higher National ITE Certificate (Higher Nitec)<br>\n' +
      '\n' +
      '<br>\n' +
      'Successful candidates must be able to commence employment with us within six months from the date of application.',
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
