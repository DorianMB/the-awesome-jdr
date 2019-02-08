import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyAGFCAGhLANCJKIJOoQvSQ5D7VIMtBISdE",
      authDomain: "the-awesome-jdr.firebaseapp.com",
      databaseURL: "https://the-awesome-jdr.firebaseio.com/",
      projectId: "the-awesome-jdr",
      storageBucket: "the-awesome-jdr.appspot.com",
      messagingSenderId: "794368771250"
    };
    firebase.initializeApp(config);
  }
}
