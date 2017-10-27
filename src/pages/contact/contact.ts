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

    // get all the data on the page

    this.navCtrl.push(UploadPage, {}, {animation: 'ios-transition'});
  }

}

export interface FormData{
  full_name: string;
  id_number: string;
  gender:string;
  
}
