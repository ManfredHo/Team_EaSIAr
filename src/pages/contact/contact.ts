import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {UploadPage} from "../Upload/Upload";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private mainForm: ApplicantData = {
  };

  constructor(public navCtrl: NavController) {
    // this.mainForm['full_name'] = 'testing';
    // this.mainForm['id_number'] = '123123XX';
    // this.mainForm['gender'] = '1';
    // this.mainForm['nationality'] = '123123XX';
    // this.mainForm['race'] = '2';
    // this.mainForm['employment_status'] = '1';
    // this.mainForm['occupation'] = 'student';
    // this.mainForm['phone_number'] = '123123XX';
    // this.mainForm['email'] = '123123XX';
  }

  gotoNextPage() {
    this.navCtrl.push(UploadPage,
      {'data': this.mainForm},
      {animation: 'ios-transition'});
  }
}

export interface ApplicantData {
  full_name?: string;
  id_number?: string;
  gender?: string;

  nationality?: string;
  race?: string;

  employment_status?: string;
  occupation?: string;

  email?: string;
  phone_number?: string;
}
