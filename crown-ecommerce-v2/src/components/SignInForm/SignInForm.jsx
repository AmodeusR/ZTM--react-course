import { useState } from "react";
import { Input, Button } from "/src/components";

const SignInForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="signin">
      <h2 className="signin__title">{title}</h2>
      <form className="signin__form">
        <Input
          title="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttons" style={{display: "flex", gap: "1rem"}}>
          <Button title="Sign in to your account" />
          <Button title="Sign in with Google" color="royalblue" />
        </div>
      </form>
    </section>
  );
};

export default SignInForm;
