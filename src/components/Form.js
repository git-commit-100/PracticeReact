import React from "react";
import useInput from "../hooks/use-input";
import styles from "./Form.module.css";

function Form() {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    wasTouched: wasFirstNameTouched,
    hasError: doesFirstNameHaveError,
    handleInputChange: handleFirstNameChange,
    handleInputBlur: handleFirstNameBlur,
    resetInput: resetFirstName,
  } = useInput((firstName) => firstName.trim() !== "");

  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    wasTouched: wasLastNameTouched,
    hasError: doesLastNameHaveError,
    handleInputChange: handleLastNameChange,
    handleInputBlur: handleLastNameBlur,
    resetInput: resetLastName,
  } = useInput((lastName) => lastName.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    wasTouched: wasEmailTouched,
    hasError: doesEmailHaveError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetInput: resetEmail,
  } = useInput((email) => email.trim() !== "" && email.includes("@"));

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime(),
      name: enteredFirstName + " " + enteredLastName,
      email: enteredEmail,
    };
    console.table(newUser);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  //DOM helpers
  let contentJsxFirstName = doesFirstNameHaveError ? (
    <p className={styles["error-text"]}>First Name cannot be empty</p>
  ) : (
    ""
  );

  let contentJsxLastName = doesLastNameHaveError ? (
    <p className={styles["error-text"]}>Last Name cannot be empty</p>
  ) : (
    ""
  );

  let contentJsxEmail = doesEmailHaveError ? (
    <p className={styles["error-text"]}>Provide a valid Email</p>
  ) : (
    ""
  );

  return (
    <div className={styles["form-div"]}>
      <h3 className={styles["header"]}>Basic Form Validation</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input-first-name">First Name</label>
        <input
          type="text"
          id="input-first-name"
          autoComplete="none"
          value={enteredFirstName}
          onChange={handleFirstNameChange}
          onBlur={handleFirstNameBlur}
          className={`${
            doesFirstNameHaveError ? styles["input-invalid"] : ""
          } ${wasFirstNameTouched ? styles["input-valid"] : ""}`}
        />
        {contentJsxFirstName}

        <label htmlFor="input-last-name">Last Name</label>
        <input
          type="text"
          id="input-last-name"
          autoComplete="none"
          value={enteredLastName}
          onChange={handleLastNameChange}
          onBlur={handleLastNameBlur}
          className={`${doesLastNameHaveError ? styles["input-invalid"] : ""} ${
            wasLastNameTouched ? styles["input-valid"] : ""
          }`}
        />
        {contentJsxLastName}

        <label htmlFor="input-email">Email Here</label>
        <input
          type="email"
          id="input-email"
          autoComplete="none"
          value={enteredEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className={`${doesEmailHaveError ? styles["input-invalid"] : ""} ${
            wasEmailTouched ? styles["input-valid"] : ""
          }`}
        />
        {contentJsxEmail}

        <button
          type="submit"
          className={styles["submit-btn"]}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
