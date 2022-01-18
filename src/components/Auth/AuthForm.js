import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import useInput from "../../hooks/useInput";
import classes from "./AuthForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const AuthForm = () => {
  let isFormValid = false;
  const [isLogin, setIsLogin] = useState(true);
  const { data, error, status, sendRequest } = useHttp();
  const loading = status === "pending";

  useEffect(() => {
    if (status === "completed") {
      if (error) {
        console.log(error);
      }

      let { error: errorFromFirebase } = data;
      if (errorFromFirebase) {
        console.log({ errorFromFirebase });
      }

      if (!errorFromFirebase && data) {
        console.log("success", data);
      }
    }
  }, [status, data, error]);

  const {
    inputValue: emailInput,
    isInputValid: isEmailValid,
    isInputTouched: isEmailTouched,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );

  const {
    inputValue: passwordInput,
    isInputValid: isPasswordValid,
    isInputTouched: isPasswordTouched,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput((pass) => pass.length > 7);

  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      //...login
      console.log("login");
    } else {
      //...signup
      console.log("signup");
      const newUser = {
        id: new Date().getTime(),
        email: emailInput,
        password: passwordInput,
      };
      sendRequest({
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: newUser,
      });
    }
  }

  //DOM helpers
  const invalidEmail = isEmailTouched && !isEmailValid;
  const invalidPassword = isPasswordTouched && !isPasswordValid;

  return (
    <>
      {loading && <LoadingSpinner />}
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              className={invalidEmail ? classes.invalid : classes.valid}
              value={emailInput}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {invalidEmail && (
              <p className={classes.errorText}>Enter a valid email</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              className={invalidPassword ? classes.invalid : ""}
              value={passwordInput}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            {invalidPassword && (
              <p className={classes.errorText}>
                Password must be more than 7 characters
              </p>
            )}
          </div>
          <div className={classes.actions}>
            <button
              className="btn login-btn"
              disabled={!isFormValid}
              type="submit"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
