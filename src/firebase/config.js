import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1tyDD-khCthfP0tNNXUu5Gy3jOY-xzts",
  authDomain: "image-gallery-3cb34.firebaseapp.com",
  projectId: "image-gallery-3cb34",
  storageBucket: "image-gallery-3cb34.appspot.com",
  messagingSenderId: "1021064853614",
  appId: "1:1021064853614:web:aa7167779aed3ad7980e7f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
   
