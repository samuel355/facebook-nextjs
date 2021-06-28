import firebase from 'firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGc7uwy9fDqpzRv4Wyut6qAKd0-YMJ3ZA",
  authDomain: "fb-next-ap.firebaseapp.com",
  projectId: "fb-next-ap",
  storageBucket: "fb-next-ap.appspot.com",
  messagingSenderId: "124047721975",
  appId: "1:124047721975:web:ad28cc6f80b2d03ff21af2",
  measurementId: "G-QS623PXRNQ"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore();
const storage = firebase.storage()

export {db, storage}