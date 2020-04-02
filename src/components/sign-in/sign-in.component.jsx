import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [signInValues, setSignInValues] = useState({
    email: "",
    password: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Sign In Values: ", signInValues.email + signInValues.password);
    setSignInValues({
      email: "",
      password: ""
    });
  };

  const onChange = e => {
    setSignInValues({ ...signInValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={onSubmit} autoComplete="off">
        <FormInput
          type="email"
          name="email"
          value={signInValues.email}
          handleChange={onChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signInValues.password}
          handleChange={onChange}
          label="name"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
