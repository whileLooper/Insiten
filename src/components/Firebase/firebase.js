import app from 'firebase/app';
import 'firebase/auth';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBfXgzXWrjWwSUgAu6zwLTKDuzAgcKjWhw",
  authDomain: "insiten-dashboard.firebaseapp.com",
  databaseURL: "https://insiten-dashboard.firebaseio.com",
  projectId: "insiten-dashboard",
  storageBucket: "insiten-dashboard.appspot.com",
  messagingSenderId: "783456743261"
};

let databaseRef = null;

class Firebase {
  constructor() {
    console.log('initialing firebase...');
    app.initializeApp(config);
    this.auth = app.auth();
    firebase.database().ref();
    databaseRef = firebase.database().ref();
  }

}


export const actions = databaseRef;
export default Firebase;