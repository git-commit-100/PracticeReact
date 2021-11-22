import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  console.log("Button Running");
  return (
    <button
      className={`${styles["btn"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
