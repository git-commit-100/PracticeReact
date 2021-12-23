import React from "react";
import Card from "./UI/Card";
import styles from "./Login.module.css";
import useInput from "../hooks/useInput";
import { authSliceActions } from "../store/reduxStore";
import { useDispatch } from "react-redux";

function Login(props) {
  const dispatch = useDispatch();

  let isFormValid = false;
  const {
    value: emailInput,
    isValid: isEmailInputValid,
    hasError: doesEmailInputHaveError,
    handleInputChange: handleEmailInputChange,
    handleInputBlur: handleEmailInputBlur,
    resetInput: resetEmailInput,
  } = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );

  const {
    value: passwordInput,
    isValid: isPasswordInputValid,
    hasError: doesPasswordInputHaveError,
    handleInputChange: handlePasswordInputChange,
    handleInputBlur: handlePasswordInputBlur,
    resetInput: resetPasswordInput,
  } = useInput((password) => password.trim() !== "" && password.length >= 8);

  if (isEmailInputValid && isPasswordInputValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const newUser = {
        id: new Date().getTime(),
        email: emailInput,
        password: passwordInput,
      };
      dispatch(authSliceActions.login());
      dispatch(authSliceActions.setUser(newUser));
      //resetting user input fields
      resetEmailInput();
      resetPasswordInput();
    }
  };

  //DOM helpers
  const emailErrorJsx = doesEmailInputHaveError && (
    <p className={styles["error-text"]}>Provide a valid email</p>
  );

  const passwordErrorJsx = doesPasswordInputHaveError && (
    <p className={styles["error-text"]}>
      Password must be of 8 letters atleast
    </p>
  );

  return (
    <Card className={styles["login-card"]}>
      <h3 className={styles["login-heading"]}>Login Page By Redux</h3>
      <form className={styles["login-form"]} onSubmit={formSubmitHandler}>
        <label htmlFor="email-input">Enter Your Email Here</label>
        <input
          type="email"
          className={doesEmailInputHaveError ? styles["invalid"] : ""}
          value={emailInput}
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          autoComplete="none"
          id="email-input"
        />
        {emailErrorJsx}

        <label htmlFor="password-input">Enter Your Password Here</label>
        <input
          type="password"
          className={doesPasswordInputHaveError ? styles["invalid"] : ""}
          value={passwordInput}
          onChange={handlePasswordInputChange}
          onBlur={handlePasswordInputBlur}
          autoComplete="none"
          id="password-input"
        />
        {passwordErrorJsx}

        <button
          type="submit"
          disabled={!isFormValid}
          className={styles["login-btn"]}
        >
          Login
        </button>
      </form>
    </Card>
  );
}

export default Login;
