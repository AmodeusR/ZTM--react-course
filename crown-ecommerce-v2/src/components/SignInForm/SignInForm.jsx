import { useState } from "react";
import { Input } from "/src/components";

const SignInForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="signin">
      <h2 className="signin__title">{title}</h2>
      <form className="signin__form">
        <Input
          title="mail"
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
      </form>
    </section>
  );
};

export default SignInForm;
