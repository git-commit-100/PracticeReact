import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  /* hooks must be used in parent component 
     props must have
        label
        error
        inputConfig => all input info from hooks
        whenError => hooks => whenTouched && notValid
    */
  return (
    <section className={styles["input-section"]}>
      <label className={styles["input-label"]}>{props.label}</label>
      <input {...props.inputConfig} />
      {props.whenError && (
        <p className={styles["input-error"]}>{props.error}</p>
      )}
    </section>
  );
}

export default Input;
