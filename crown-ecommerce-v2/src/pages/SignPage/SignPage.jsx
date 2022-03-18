import React from "react";
import { signInWithGooglePopup as googleSignIn, userRegistration } from "/src/utils/firebase/firebase";

const SignPage = () => {
  const signInWithGoogle = async () => {
    const { user } =  await googleSignIn();
    const userDocRef = await userRegistration(user);
  }

  return (
    <div>
      <h2>Sign Page</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignPage;
