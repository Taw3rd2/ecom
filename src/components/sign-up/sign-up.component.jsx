import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { displayName } = userInput;

    if (userInput.password !== userInput.confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        userInput.email,
        userInput.password
      );

      await createUserProfileDocument(user, { displayName });

      setUserInput({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userInput.displayName}
          onChange={onChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userInput.email}
          onChange={onChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userInput.password}
          onChange={onChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userInput.confirmPassword}
          onChange={onChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
