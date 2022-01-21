import classes from "./ProfileForm.module.css";
import useInput from "../../hooks/useInput";
import useHttp from "../../hooks/useHttp";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import Notification from "../UI/Notification";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  let isFormValid = false;
  const [notification, setNotification] = useState(null);
  const [passDontMatch, setPassDontMatch] = useState(false);
  const {
    inputValue: newPassInput,
    isInputTouched: isNewPassTouched,
    isInputValid: isNewPassValid,
    handleInputChange: handleNewPassChange,
    handleInputBlur: handleNewPassBlur,
    resetInput: resetNewPass,
  } = useInput((pass) => pass.length > 7);

  const {
    inputValue: confirmPassInput,
    isInputTouched: isConfirmPassTouched,
    isInputValid: isConfirmPassValid,
    handleInputChange: handleConfirmPassChange,
    handleInputBlur: handleConfirmPassBlur,
    resetInput: resetConfirmPass,
  } = useInput((pass) => pass.length > 7);

  if (isNewPassValid && isConfirmPassValid) {
    isFormValid = true;
  }

  const { data, error, status, sendRequest } = useHttp();
  const loading = status === "pending";

  function handleFormSubmit(e) {
    e.preventDefault();
    //checking if both passwords match
    if (newPassInput !== confirmPassInput) {
      setPassDontMatch(true);
      return;
    }
    //password matches send request
    sendRequest({
      url: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=",
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: { idToken: authCtx.token, password: newPassInput },
    });
  }

  //resetting form
  const resetProfileForm = useCallback(() => {
    resetNewPass();
    resetConfirmPass();
  }, [resetNewPass, resetConfirmPass]);

  useEffect(() => {
    if (status === "completed") {
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

      //success
      if (!error && !errorFromFirebase && data) {
        setNotification(
          <Notification
            heading="Success"
            type="success"
            error=""
            message={
              "Password has changed successfully ! You can now login with new Password"
            }
            hideNotification={() => setNotification(null)}
          />
        );
        resetProfileForm();
        return;
      }

      return () => {
        //clean up function
        //clear any previous notifications
        setNotification(null);
      };
    }
  }, [data, error, status, resetProfileForm]);

  const invalidNewPass = isNewPassTouched && !isNewPassValid;
  const invalidConfirmPass = isConfirmPassTouched && !isConfirmPassValid;

  return (
    <>
      {loading && <LoadingSpinner />}
      {notification}
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <h2 className={classes.header}>Password Change Form</h2>
        {passDontMatch && (
          <p style={{ textAlign: "center" }} className={classes.errorText}>
            Passwords do not match ! Try again
          </p>
        )}
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            className={invalidNewPass ? classes.invalid : ""}
            value={newPassInput}
            onChange={handleNewPassChange}
            onBlur={handleNewPassBlur}
            id="new-password"
          />
          {invalidNewPass && (
            <p className={classes.errorText}>
              Password must be more than 7 characters
            </p>
          )}
          <label htmlFor="new-password-confirm">Confirm New Password</label>
          <input
            type="password"
            className={invalidConfirmPass ? classes.invalid : ""}
            value={confirmPassInput}
            onChange={handleConfirmPassChange}
            onBlur={handleConfirmPassBlur}
            id="new-password-confirm"
          />
          {invalidConfirmPass && (
            <p className={classes.errorText}>
              Password must be more than 7 characters
            </p>
          )}
        </div>
        <div className={classes.action}>
          <button className="btn" type="submit" disabled={!isFormValid}>
            Change Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
