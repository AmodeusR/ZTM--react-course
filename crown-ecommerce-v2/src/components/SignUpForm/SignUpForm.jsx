import { Input } from "/src/components";
import "./sign-up-form.scss";
import { useState } from "react";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ title }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name: selectedField, value} = e.target;

    const newFormFields = {
      ...formFields,
      [selectedField]: value
    };

    setFormFields(newFormFields);
  };

  return (
    <section className="signup">
      <h2 className="signup__title">{title}</h2>
      <form action="post" onSubmit={(e) => handleSubmit(e)}>
        <Input
          title="username"
          type="text"
          name="username"
          required
          onChange={handleInputChange}
          value={ username }
        />
        <Input
          title="email"
          type="email"
          name="email"
          required
          onChange={handleInputChange}
          value={ email }
        />
        <Input
          title="password"
          type="password"
          name="password"
          required
          onChange={handleInputChange}
          value={ password }
        />
        <Input
          title="Confirm password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleInputChange}
          value={ confirmPassword }
        />
      </form>
    </section>
  );
};

export default SignUpForm;
