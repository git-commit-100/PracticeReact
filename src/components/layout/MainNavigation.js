import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles["header"]}>
      <h3 className={styles["logo"]}>
        <Link to={"/quotes"}>Quotes</Link>
      </h3>
      <nav className={styles["nav"]}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles["active"] : "")}
              to="/quotes"
            >
              Home
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
