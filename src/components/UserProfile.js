import React from "react";
import Card from "./UI/Card";
import userProfile from "../assets/userProfile.png";
import styles from "./UserProfile.module.css";

function UserProfile(props) {
  const { email } = props.user;
  return (
    <Card className={styles["user-card"]}>
      <img src={userProfile} className={styles["user-img"]} alt="Hello User" />
      <h3 className={styles["user-header"]}>Hello {email}</h3>
    </Card>
  );
}

export default UserProfile;
