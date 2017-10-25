import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {UploadPage} from "../Upload/Upload";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  gotoNextPage() {
    this.navCtrl.push(UploadPage, {}, {animation: 'ios-transition'});
  }

}
