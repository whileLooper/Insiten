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

class Firebase {
  constructor() {
    console.log('initialing firebase...');
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // api
  companies = () => this.db.ref('/companies');

}

export default Firebase;