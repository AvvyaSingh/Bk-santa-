import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyC1-cFda5BtSSatwjMKOUCeWQoOCkZkoQk",
    authDomain: "barter-system-5ef23.firebaseapp.com",
    projectId: "barter-system-5ef23",
    storageBucket: "barter-system-5ef23.appspot.com",
    messagingSenderId: "334411919286",
    appId: "1:334411919286:web:57de50bd36256142845b17"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()