import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNTKw3isJRbYbr91ey7BHzeuUCr4Bpdsw",
  authDomain: "ecom-db-61b98.firebaseapp.com",
  databaseURL: "https://ecom-db-61b98.firebaseio.com",
  projectId: "ecom-db-61b98",
  storageBucket: "ecom-db-61b98.appspot.com",
  messagingSenderId: "95353716601",
  appId: "1:95353716601:web:5dbc84b23f2cb76c2ff9a8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
