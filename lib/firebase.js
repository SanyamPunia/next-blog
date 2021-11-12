import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBVehNKXYcWWtFDZbXHy-I41nJOr-7fNpc",
    authDomain: "nextblogship.firebaseapp.com",
    projectId: "nextblogship",
    storageBucket: "nextblogship.appspot.com",
    messagingSenderId: "503317940382",
    appId: "1:503317940382:web:c1b53bd5090e0bb624138f"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();