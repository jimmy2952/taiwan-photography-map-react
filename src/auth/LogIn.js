import React, { useState, useContext } from "react";

import Input from "../shared/components/UIElements/Input"
import Button from "../shared/components/UIElements/Button"
import { useForm } from "../shared/hook/form-hook"
import { AuthContext } from "../shared/context/auth-context"
import { useHttpClient } from "../shared/hook/http-hook"
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../utils/validators"
import classes from "./LogIn.module.css"

const LogIn = (props) => {
  const auth = useContext(AuthContext);
  const [isLogInMode, setIsLogInMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormDate] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_URL)
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        { "Content-Type": "application/json" }
      );
      auth.login(responseData.user.id);
    } catch (err) {}
    console.log(formState);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>登入</h1>
      <form className={classes.LogIn} onSubmit={loginSubmitHandler}>
        
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="請輸入有效的E-mail。"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="密碼"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="請輸入密碼。"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          登入
        </Button>
      </form>
    </>
  );
};

export default LogIn;
