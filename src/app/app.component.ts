import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }
  // loadedFeature = 'recipe';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBqi90f9DrkzzpaXyCTtUxkoVTurQmMyPo",
    //   authDomain: "ng-recipe-book-1346d.firebaseapp.com"
    // });
    this.authService.autoLogin();
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
