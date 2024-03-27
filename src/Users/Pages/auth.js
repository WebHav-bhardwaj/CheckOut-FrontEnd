import React, { useState,useContext } from "react";

import MainHeading from "../../shared/components/UIElements/MainHeading";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/components/util/validators";
import { useForm } from "../../shared/components/Hooks/form-hook";
import { AuthContext } from "../../shared/components/Context/auth-context";

export default function Auth() {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      user_email: { value: "", isValid: false },
      user_password: { value: "", isValid: false },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
    auth.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, user_name: undefined, user_contact: undefined },
        formState.inputs.user_email.isValid &&
          formState.inputs.user_password.isValid
      );
    } else {
      setFormData(
        { ...formState.inputs, user_name: { value: "", isValid: false }, user_contact:{value:'',isValid:false} },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div className="w-full flex-col justify-center">
      <MainHeading className="text-3xl pt-8 pb-8 lg:pt-10 lg:pb-10">
        <h2>Login Required</h2>
      </MainHeading>
      <form
        className="border-2 py-4 px-6 flex justify-center lg:items-start border-black mb-16 mx-3 lg:px-16 lg:mx-64 lg:py-8"
        onSubmit={authSubmitHandler}
      >
        <div className="lg:w-2/3">
          {!isLoginMode && (
            <Input
              className="lg:w-full"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              id="user_name"
              element="input"
              label="Full Name"
              placeholder="Enter Full Name"
              errorText="Please enter your full name"
            />
          )}
          <Input
            className="lg:w-full"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            id="user_email"
            element="input"
            label="Email"
            placeholder="Enter Valid Email Address"
            errorText="Please enter a valid email address"
          />
          {!isLoginMode && (
            <Input
              className="lg:w-full"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              id="user_contact"
              element="input"
              label="Contact Number"
              placeholder="Enter A Valid Contact Number"
              errorText="Please enter a valid contact number with country code"
            />
          )}
          <Input
            className="lg:w-full"
            id="user_password"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            element="input"
            label="Password"
            placeholder="Enter password"
            errorText="Please enter a valid password of minmum 6 characters"
          />
          <div className="w-full flex justify-center ">
            <Button
              className={`rounded-md text-sm my-8 border-2 w-36 py-3 border-black bg-BackDropMain lg:text-lg`}
              type="submit"
              disabled={!formState.isValid}
            >
              {isLoginMode ? "LOGIN" : "SIGNUP"}
            </Button>
          </div>
          <div className="w-full flex justify-center">
            <p>
              {isLoginMode ? "Not a user?" : "Already a user?"}
              <button
                onClick={switchModeHandler}
                className=" text-blue-500 underline"
              >
                {isLoginMode ? "Signup" : "Login"} Now
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
