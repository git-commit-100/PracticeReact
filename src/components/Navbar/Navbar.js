import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["pop-back1"]}></div>
      <h1 className={styles["brand-h1"]}>MovieKnow</h1>
      <div className={styles["pop-back1"]}></div>
    </div>
  );
}

export default Navbar;
