import React from "react";
import notFound from "../../assets/notFound.png";
import styles from "./NotFound.module.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Card className={styles["error-card"]}>
      <h2 className={styles["error-heading"]}>Oops...Page Not Found !</h2>
      <img className={styles["error-png"]} src={notFound} alt="Error 404" />
      <button className={`btn ${styles["go-to-home-btn"]}`}>
        <Link to="/quotes"> Go To Home Page</Link>
      </button>
    </Card>
  );
}

export default NotFound;
