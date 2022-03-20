import { Input, Button } from "/src/components";
import "./sign-up-form.scss";
import { useState } from "react";
import { userRegistration, googleUserAuth } from "../../utils/firebase/firebase";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ title }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (username.length < 4) {
      alert("Username needs to be at least 4 characters long");
      return;

    } else if (username.includes(" ")) {
      alert("Username shouldn't have spaces");
      return;

    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // User Authentication
    try {
      const { user } = await userRegistration(email, password);
      user.displayName = username;
      const userDocRef = await googleUserAuth(user);
      
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already registered");
      }
    }


    
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
      <form className="signup__form" onSubmit={handleSubmit}>
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

        <Button title="Sign up now" type="submit" />
      </form>
    </section>
  );
};

export default SignUpForm;
