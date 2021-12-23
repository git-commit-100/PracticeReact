import React from "react";
import styles from "./Header.module.css";
import { authSliceActions } from "../store/reduxStore";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
  };

  const navBar = isAuthenticated && (
    <ul className={styles["nav-links"]}>
      <li className={styles["nav-link"]}>
        <a href="#">Home</a>
      </li>
      <li className={styles["nav-link"]}>
        <a href="#">About</a>
      </li>
      <li className={`${styles["nav-link"]} ${styles["logout-link"]}`}>
        <a href="#" onClick={logoutHandler}>
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <div className={styles["navbar-div"]}>
      <nav className={styles["navbar"]}>
        <h2 className={styles["brand"]}>Redux Login</h2>
        {navBar}
      </nav>
    </div>
  );
}

export default Header;
