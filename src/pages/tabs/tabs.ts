import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UploadPage } from '../Upload/Upload';
import { ThanksPage } from '../Thanks/Thanks';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
   tab3Root = ContactPage;
  tab4Root = UploadPage;
  tab5Root = ThanksPage;
  constructor() {

  }
}
