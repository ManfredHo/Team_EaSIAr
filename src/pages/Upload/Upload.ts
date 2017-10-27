import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ThanksPage} from "../Thanks/Thanks";
import {Http} from "@angular/http";

@Component({
  selector: 'page-upload',
  templateUrl: 'Upload.html'
})
export class UploadPage implements OnInit {

  questions: string[] = [
    'Which do you prefer: MacDonald or KFC? Why?',
    'Why do you want to join SIA?',
    'If you have one million dollars, what would you do with it?',
    'What is your favourite food? Why?',
    'What is your favourite colour? Why?',
    'Of all the countries you have been to, which is your favourite? Why?',
    'Of all the countries you have been to, which is your least favourite? Why?',
  ];

  question: string = '';

  upload_btn: string = 'Upload';

  @ViewChild('upload_form') uploadForm: ElementRef;

  constructor(public navCtrl: NavController, private navParams: NavParams, private http: Http) {

  }

  ngOnInit() {
    let randomNumber = Math.floor(Math.random() * (this.questions.length - 1) + 1);
    this.question = this.questions[randomNumber];
  }

  gotoNextPage() {
    this.navCtrl.push(ThanksPage, {}, {animation: 'ios-transition'});
  }

  selectVideoFile() {
    this.uploadForm.nativeElement.contentDocument.body.querySelectorAll("[name=upload_file]")[0].click()
  }

  submitForm() {
    // the applicant data from the previous page
    let data = this.navParams.get('data');

    let names = [
      'full_name',
      'id_number',
      'phone_number',
      'gender',
      'race',
      'nationality',
      'birth_country',
      'country_of_residence',
      'employment_status',
      'occupation',
      'address',
      'email'
    ];

    let frameBody = this.uploadForm.nativeElement.contentDocument.body;

    names.forEach(name => {

      if (name === 'gender') {
        switch (data['gender'].toLowerCase()) {
          case 'male':
            data['gender'] = 1;
            break;
          case 'female':
            data['gender'] = 2;
            break;
          default:
            data['gender'] = 1;
        }
      }

      if (name === 'race') {
        switch (data['race'].toLowerCase()) {
          case 'chinese':
            data['race'] = 1;
            break;
          case 'malay':
            data['race'] = 2;
            break;
          case 'indian':
            data['race'] = 3;
            break;
          case 'others':
            data['race'] = 4;
            break;
          default:
            data['race'] = 1;
        }
      }
      ;

      if (name === 'employment_status') {
        switch (data['employment_status'].toLowerCase()) {
          case 'unemployed':
            data['employment_status'] = 1;
            break;
          case 'self-employed':
          case 'self employed':
            data['race'] = 2;
            break;
          case 'employed':
            data['employment_status'] = 3;
            break;
          default:
            data['employment_status'] = 2;
        }
      }

      frameBody.querySelectorAll("[name=" + name + "]")[0].value = data[name];
    });

    frameBody.querySelectorAll("[name=submit_button]")[0].click();

    this.upload_btn = 'Uploading...';

    let pollInterval = setInterval(() => {
      // check the frame bod
      this.http.post('http://ec2-54-169-64-180.ap-southeast-1.compute.amazonaws.com:8000/form-submission/has-email', {email: data['email']}).subscribe(response => {
        console.log('Checking if uploaded', response.json()['response']);
        if (response.json()['response'] === 'Yes') {
          this.gotoNextPage();
          clearInterval(pollInterval);
        }
      });

    }, 500);
  }
}
