import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ThanksPage} from "../Thanks/Thanks";

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

  ]

  question: string = '';

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    let randomNumber = Math.floor(Math.random() * (this.questions.length - 1) + 1);
    this.question = this.questions[randomNumber];
  }

  gotoNextPage() {
    this.navCtrl.push(ThanksPage, {}, {animation: 'ios-transition'});
  }
}
