import React from "react";
import { signInWithGooglePopup as googleSignIn, userRegistration } from "/src/utils/firebase/firebase";
import { Input, SignUpForm } from "../../components";
import "./sign-page.scss";

const SignPage = () => {
  const signInWithGoogle = async () => {
    const { user } =  await googleSignIn();
    const userDocRef = await userRegistration(user);
  }

  return (
    <div className="container">
      {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
      <h1>Sign In Page</h1>

      <div className="sections">
        <section className="sign-in">
          <Input title="mail" type="email" required />
          <Input title="password" type="password" required />
        </section>
        
        <SignUpForm title="Sign up" />
      </div>
    </div>
  );
};

export default SignPage;
