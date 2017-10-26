import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ThanksPage} from "../Thanks/Thanks";

@Component({
  selector: 'page-upload',
  templateUrl: 'Upload.html'
})
export class UploadPage {

  constructor(public navCtrl: NavController) {

  }

  gotoNextPage() {
    this.navCtrl.push(ThanksPage, {}, {animation: 'ios-transition'});
  }


}
