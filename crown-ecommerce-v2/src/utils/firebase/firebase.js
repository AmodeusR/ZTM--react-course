import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhr4PhNv5rIT3TROWW-1UtVscSa-GT9uE",
  authDomain: "ztm--crown-ecommerce-v2.firebaseapp.com",
  projectId: "ztm--crown-ecommerce-v2",
  storageBucket: "ztm--crown-ecommerce-v2.appspot.com",
  messagingSenderId: "303897843871",
  appId: "1:303897843871:web:2855b1f33268492adcaaaa",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const googleUserAuth = async (userAuthData) => {
  if (!userAuthData) {
    console.error("User auth data needed");
    return;
  } 

  const userDocRef = doc(db, "users", userAuthData.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // Create user
    const { displayName, email } = userAuthData;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

export const userRegistration = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password);
}