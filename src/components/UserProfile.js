import React from "react";
import Card from "./UI/Card";
import userProfile from "../assets/userProfile.png";
import styles from "./UserProfile.module.css";
import { useSelector } from "react-redux";

function UserProfile() {
  const userEmail = useSelector((state) => state.auth.user.email);

  return (
    <Card className={styles["user-card"]}>
      <img src={userProfile} className={styles["user-img"]} alt="Hello User" />
      <h3 className={styles["user-header"]}>Hello {userEmail}</h3>
    </Card>
  );
}

export default UserProfile;
