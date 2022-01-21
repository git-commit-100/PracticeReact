import React, { useEffect } from "react";
import { useCallback } from "react/cjs/react.development";
import styles from "./Notification.module.css";

function Notification(props) {
  const { heading, message, type, error } = props;
  let notificationClasses = "";

  if (type === "success") {
    notificationClasses = styles["noti-success"];
  } else if (type === "error") {
    notificationClasses = styles["noti-error"];
  } else {
    notificationClasses = styles["noti-default"];
  }

  //transforming fireabse error msg in custom msg
  let errorMsg = "";
  if (error.message === "EMAIL_EXISTS") {
    errorMsg = "Email already exixsts ! Please Login to continue.";
  } else if (error.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
    errorMsg = "Server is busy ! Try again later.";
  } else if (error.message === "EMAIL_NOT_FOUND") {
    errorMsg = "No email found in database ! Maybe register yourself ?";
  } else if (error.message === "INVALID_PASSWORD") {
    errorMsg = "Email password combination is incorrect ! Try again.";
  } else if (error.message === "INVALID_ID_TOKEN") {
    errorMsg = "Login session has expired ! Login in again to continue";
  } else if (
    error.message === "INVALID_REQ_TYPE : Unsupported request parameters."
  ) {
    errorMsg = "Oops Bad request ! Try again";
  } else if (!message) {
    errorMsg = "Something went wrong ! Try again after some time";
  }

  const { hideNotification } = props;
  const closeNotification = useCallback(() => {
    hideNotification();
  }, [hideNotification]);

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      closeNotification();
    }, 6000);

    return () => {
      clearTimeout(notificationTimer);
    };
  }, [closeNotification]);

  return (
    <div className={`${notificationClasses} ${styles["noti-div"]}`}>
      <h3 className={styles["noti-header"]}>{heading}</h3>
      <p className={styles["noti-message"]}>{errorMsg || message}</p>
      <button className={styles["noti-cancel"]} onClick={closeNotification}>
        x
      </button>
    </div>
  );
}

export default Notification;
