import React from "react";
import { signInWithGooglePopup as googleSignIn, googleUserAuth } from "/src/utils/firebase/firebase";
import { SignUpForm, SignInForm } from "../../components";
import "./auth.scss";

const Authentication = () => {

  return (
    <div className="container">
      <div className="sections">
        <SignInForm title="Sign In" />
        <SignUpForm title="Sign up" />
      </div>
    </div>
  );
};

export default Authentication;
