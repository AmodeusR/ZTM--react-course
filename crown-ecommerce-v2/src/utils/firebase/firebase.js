import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhr4PhNv5rIT3TROWW-1UtVscSa-GT9uE",
  authDomain: "ztm--crown-ecommerce-v2.firebaseapp.com",
  projectId: "ztm--crown-ecommerce-v2",
  storageBucket: "ztm--crown-ecommerce-v2.appspot.com",
  messagingSenderId: "303897843871",
  appId: "1:303897843871:web:2855b1f33268492adcaaaa"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();


export const userRegistration = async (userAuthData) => {
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
        createdAt
      });
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return userDocRef;
}