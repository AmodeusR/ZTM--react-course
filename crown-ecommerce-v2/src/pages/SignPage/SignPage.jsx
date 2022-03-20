import React from "react";
import { signInWithGooglePopup as googleSignIn, googleUserAuth } from "/src/utils/firebase/firebase";
import { SignUpForm, SignInForm } from "../../components";
import "./sign-page.scss";

const SignPage = () => {
  const signInWithGoogle = async () => {
    const { user } =  await googleSignIn();
    const userDocRef = await googleUserAuth(user);

    console.log(userDocRef);
  }

  return (
    <div className="container">
      <div className="sections">
        <SignInForm title="Sign In" />
        <SignUpForm title="Sign up" />
      </div>
    </div>
  );
};

export default SignPage;
