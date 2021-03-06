import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
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

  showFileQuality: boolean = false;
  showFileQualityString: string = '';

  @ViewChild('upload_form') uploadForm: ElementRef;

  constructor(public navCtrl: NavController, private navParams: NavParams, private http: Http,
              public alertCtrl: AlertController, private zone: NgZone) {

  }

  ngOnInit() {
    let randomNumber = Math.floor(Math.random() * (this.questions.length - 1) + 1);
    this.question = this.questions[randomNumber];
  }

  gotoNextPage() {
    this.navCtrl.push(ThanksPage, {}, {animation: 'ios-transition'});
  }

  didAttachedFileListener = false;

  selectVideoFile() {
    let file_upload = this.uploadForm.nativeElement.contentDocument.body.querySelectorAll("[name=upload_file]")[0];
    file_upload.click();

    if (!this.didAttachedFileListener) {
      file_upload.addEventListener('change', () => {

        let file_upload = this.uploadForm.nativeElement.contentDocument.body.querySelectorAll("[name=upload_file]")[0];
        if (file_upload.files.length > 0) {
          this.showFileQuality = true;
          this.showFileQualityString = 'Video quality: Good';

          this.zone.run(() => {
            console.log(1);
          });
        }
      });
    }
  }

  didSelectVideoFile() {
    let file_upload = this.uploadForm.nativeElement.contentDocument.body.querySelectorAll("[name=upload_file]")[0];
    return file_upload.files.length > 0;
  }

  submitForm() {
    if (this.didSelectVideoFile()) {
      this.uploadFormData();
    } else {
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Please select a video file!',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  uploadFormData() {
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
