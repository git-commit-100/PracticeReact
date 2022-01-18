import React from "react";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles["spinner-div"]}>
      <div className={styles["spinner"]}></div>
    </div>
  );
}

export default LoadingSpinner;
