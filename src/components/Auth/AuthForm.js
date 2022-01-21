import { useContext, useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import useInput from "../../hooks/useInput";
import classes from "./AuthForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import Notification from "../UI/Notification";
import { AuthContext } from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import { useCallback } from "react/cjs/react.development";
import loginPng from "../../assets/login.png";
import registerPng from "../../assets/register.png";

const AuthForm = () => {
  const history = useHistory();
  let isFormValid = false;
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [notification, setNotification] = useState(null);
  const { data, error, status, sendRequest } = useHttp();
  const loading = status === "pending";
  const {
    inputValue: emailInput,
    isInputValid: isEmailValid,
    isInputTouched: isEmailTouched,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetInput: resetEmail,
  } = useInput(
    (email) => email.trim() !== "" && email.includes("@") && email.includes(".")
  );

  const {
    inputValue: passwordInput,
    isInputValid: isPasswordValid,
    isInputTouched: isPasswordTouched,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    resetInput: resetPassword,
  } = useInput((pass) => pass.length > 7);

  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }

  //resetting form
  const resetAuthForm = useCallback(() => {
    resetEmail();
    resetPassword();
  }, [resetPassword, resetEmail]);

  useEffect(() => {
    if (status === "completed") {
      // handle cases
      if (error) {
        setNotification(
          <Notification
            heading="Error"
            type="error"
            error={{ message: error }}
            message={error}
            hideNotification={() => setNotification(null)}
          />
        );
        return;
      }

      let { error: errorFromFirebase } = data;
      if (errorFromFirebase) {
        setNotification(
          <Notification
            heading="Error"
            type="error"
            error={errorFromFirebase}
            hideNotification={() => setNotification(null)}
          />
        );
      }

      if (!error && !errorFromFirebase && data) {
        //checking whether success msg is for login or signup
        let { kind } = data;
        if (kind === "identitytoolkit#SignupNewUserResponse") {
          //signup
          setNotification(
            <Notification
              heading="Success"
              type="success"
              error={{ message: "" }}
              hideNotification={() => setNotification(null)}
              message="Signup Successful ! Login to continue."
            />
          );
          resetAuthForm();
          setIsLogin(true);
          return;
        } else {
          // logging user in
          authCtx.login({ token: data.idToken, email: data.email });
          //redirect user to profile page
          history.replace("/profile");
          return;
        }
      }
    }

    return () => {
      //cleanup function
      //clear previous notification
      setNotification(null);
    };
  }, [status, data, error, authCtx, resetAuthForm, history]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      //...login
      const user = { email: emailInput, password: passwordInput };
      sendRequest({
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: user,
      });
      return;
    } else {
      //...signup
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
      return;
    }
  }

  //DOM helpers
  const invalidEmail = isEmailTouched && !isEmailValid;
  const invalidPassword = isPasswordTouched && !isPasswordValid;

  return (
    <>
      {loading && <LoadingSpinner />}
      {notification}
      <div className={classes["auth-div"]}>
        <section className={classes["img-div"]}>
          <img src={isLogin ? loginPng : registerPng} alt="Login Here" />
        </section>
        <section className={classes.auth}>
          <h1>{isLogin ? "Login Here" : "Sign Up Here"}</h1>
          <form onSubmit={handleFormSubmit}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                className={invalidEmail ? classes.invalid : ""}
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
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin
                  ? "Create a new account"
                  : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AuthForm;
