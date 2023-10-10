// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyTmWpMsghpBlPYWgGaprZkqA5RcVg_TE",
    authDomain: "journal-app-de006.firebaseapp.com",
    projectId: "journal-app-de006",
    storageBucket: "journal-app-de006.appspot.com",
    messagingSenderId: "243961884841",
    appId: "1:243961884841:web:a7a2f97bfd1fe2586cf9b8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
 