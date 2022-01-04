import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <h2 className={styles["brand"]}>Routing</h2>
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-link"]}>
            <NavLink
              className={({ isActive }) => (isActive ? styles["active"] : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className={styles["nav-link"]}>
            <NavLink
              className={({ isActive }) => (isActive ? styles["active"] : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
