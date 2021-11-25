import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${props.className} ${styles["btn"]} || ${styles["btn"]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
