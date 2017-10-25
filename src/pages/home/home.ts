import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MarkPage} from "../Mark/Mark";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoNextPage(){
    this.navCtrl.push(aboutpage);
  }

}
