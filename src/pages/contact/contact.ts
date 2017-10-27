import {Component} from '@angular/core';
import {AlertController, NavController} from "ionic-angular";
import {UploadPage} from "../Upload/Upload";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private mainForm: ApplicantData = {};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
    if (this.checkForm()) {
      this.navCtrl.push(UploadPage,
        {'data': this.mainForm},
        {animation: 'ios-transition'});
    }
  }

  checkForm() {
    let fields = [
      'full_name',
      'id_number',
      'gender',
      'nationality',
      'race',
      'employment_status',
      'occupation',
      'email',
      'phone_number',
    ];

    /// make sure the fields are not empty

    let emptyCount = 0;
    let invalidFields = [];

    fields.forEach(key => {
      if (this.mainForm[key] === undefined || this.mainForm[key] === null || this.mainForm[key].length === 0) {
        emptyCount++;
        invalidFields.push(key);
      }
    });

    if (emptyCount > 0) {
      // prompt

      console.log("Empty fields", invalidFields);

      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Please ensure that all fields are filled up before proceeding!',
        buttons: ['Dismiss']
      });
      alert.present();
    } else {
      return true;
    }

    return false;
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
