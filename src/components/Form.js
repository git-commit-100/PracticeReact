import useInput from "../hooks/use-input";
import styles from "./Form.module.css";

function Form() {
  const {
    value: enteredName,
    isValid: isNameValid,
    hasError: doesNameHaveError,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    resetInput: resetName,
  } = useInput((name) => name.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: doesEmailHaveError,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    resetInput: resetEmail,
  } = useInput((email) => email.trim() !== "" && email.includes("@"));

  const {
    value: enteredAge,
    isValid: isAgeValid,
    hasError: doesAgeHaveError,
    handleInputChange: handleAgeChange,
    handleInputBlur: handleAgeBlur,
    resetInput: resetAge,
  } = useInput((age) => age > 17 && age < 75);

  //overall form validity
  let isFormValid = false;

  /* in this if check we can add multiple input
  checks which will result in overall form validity */
  if (isNameValid && isEmailValid && isAgeValid) {
    isFormValid = true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (isNameValid && isEmailValid) {
      const newUser = {
        id: new Date().getTime(),
        name: enteredName,
        email: enteredEmail,
        age: enteredAge,
      };
      console.table(newUser);
      resetName();
      resetEmail();
      resetAge();
    }
  }

  //DOM helpers
  const jsxForNameError = doesNameHaveError ? (
    <p className={styles["error-text"]}>Name Cannot Be Empty</p>
  ) : (
    ""
  );

  const jsxForEmailError = doesEmailHaveError ? (
    <p className={styles["error-text"]}>Provide a valid Email</p>
  ) : (
    ""
  );

  const jsxForAgeError = doesAgeHaveError ? (
    <p className={styles["error-text"]}>Age must be older than 18</p>
  ) : (
    ""
  );

  return (
    <div className={styles["form-div"]}>
      <h3 className={styles["header"]}>Basic Form Validation</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input-name">Your Name</label>
        <input
          id="input-name"
          value={enteredName}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          type="text"
          autoComplete="none"
          className={doesNameHaveError ? styles["input-invalid"] : ""}
        />
        {jsxForNameError}
        <label htmlFor="input-email">Your Email</label>
        <input
          id="input-email"
          value={enteredEmail}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          type="email"
          autoComplete="none"
          className={doesEmailHaveError ? styles["input-invalid"] : ""}
        />
        {jsxForEmailError}
        <label htmlFor="input-age">Your Age</label>
        <input
          id="input-age"
          value={enteredAge}
          onChange={handleAgeChange}
          onBlur={handleAgeBlur}
          type="number"
          autoComplete="none"
          className={doesAgeHaveError ? styles["input-invalid"] : ""}
          min="18"
          max="75"
          step="1"
        />
        {jsxForAgeError}
        <button
          type="submit"
          disabled={!isFormValid}
          className={styles["submit-btn"]}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
