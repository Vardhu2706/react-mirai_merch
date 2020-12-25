// Imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Firebase Configuration
const config = {
    apiKey: "AIzaSyCTGb1NK1eVyGe294GhHoxeE_UT9rwwz8s",
    authDomain: "mirai-merch.firebaseapp.com",
    projectId: "mirai-merch",
    storageBucket: "mirai-merch.appspot.com",
    messagingSenderId: "572888571622",
    appId: "1:572888571622:web:090377a415e4e2ef55e527"
  };
// Initialize Firebase
firebase.initializeApp(config);
// Exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;