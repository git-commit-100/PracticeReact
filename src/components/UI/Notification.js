import React from "react";
import styles from "./Notification.module.css";

function Notification(props) {
  const { heading, message, type } = props;
  let notificationClasses = "";

  if (type === "success") {
    notificationClasses = styles["noti-success"];
  } else if (type === "error") {
    notificationClasses = styles["noti-error"];
  } else {
    notificationClasses = styles["noti-default"];
  }

  function closeNotification() {
    props.hideNotification();
  }

  return (
    <div className={`${notificationClasses} ${styles["noti-div"]}`}>
      <h3 className={styles["noti-header"]}>{heading}</h3>
      <p className={styles["noti-message"]}>{message}</p>
      <button className={styles["noti-cancel"]} onClick={closeNotification}>
        x
      </button>
    </div>
  );
}

export default Notification;
