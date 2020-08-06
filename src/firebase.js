import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAHRZ2gAynNbPT7cLwpSkXCDSSzWnc2JZc",
    authDomain: "senrysa-assignment.firebaseapp.com",
    databaseURL: "https://senrysa-assignment.firebaseio.com",
    projectId: "senrysa-assignment",
    storageBucket: "senrysa-assignment.appspot.com",
    messagingSenderId: "177318795024",
    appId: "1:177318795024:web:2c27bee71af47cf1133795",
    measurementId: "G-NVD92G21YX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };