// Imports
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Firebase Configuration
const config = {
  apiKey: "AIzaSyCTGb1NK1eVyGe294GhHoxeE_UT9rwwz8s",
  authDomain: "mirai-merch.firebaseapp.com",
  projectId: "mirai-merch",
  storageBucket: "mirai-merch.appspot.com",
  messagingSenderId: "572888571622",
  appId: "1:572888571622:web:090377a415e4e2ef55e527",
};
// Method to create user profile.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Checking if user is NULL
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // Trying to create a user doc if it doesn't exist. (Adding New User)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating the user:", error.message);
    }
  }
  // Returns userRef for additional purpose.
  return userRef;
};
// Initialize Firebase
firebase.initializeApp(config);
// Exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
