import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB-dJ2_PjLRFA3narQUpAEJB3OSlumzROI",
    authDomain: "book-store-c6cf4.firebaseapp.com",
    projectId: "book-store-c6cf4",
    storageBucket: "book-store-c6cf4.appspot.com",
    messagingSenderId: "195962890642",
    appId: "1:195962890642:web:11687ffe6fe7dca308b94b"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }