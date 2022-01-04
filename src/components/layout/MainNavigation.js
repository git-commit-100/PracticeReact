import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles["header"]}>
      <h3 className={styles["logo"]}>Quotes</h3>
      <nav className={styles["nav"]}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles["active"] : "")}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles["active"] : "")}
              to="/new-quote"
            >
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
