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
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const storage = firebase.storage();

// helper functions

/**`
 * Gets a user/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection("users");
    const query = usersRef.where("username", "==", username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }
}