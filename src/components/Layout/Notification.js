import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./Notification.module.css";

const notificationVariants = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Notification({ show, heading, message, type, hideNotification }) {
  //? state toggle in parent componentm, that state must be of BOOLEAN type
  let notificationClasses = "";

  if (type === "success") {
    notificationClasses = styles["noti-success"];
  } else if (type === "error") {
    notificationClasses = styles["noti-error"];
  } else {
    notificationClasses = styles["noti-default"];
  }

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      hideNotification(false);
    }, 6000);

    return () => {
      clearTimeout(notificationTimer);
    };
  }, [show, hideNotification]);

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          className={`${notificationClasses} ${styles["noti-div"]}`}
          variants={notificationVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h3 className={styles["noti-header"]}>{heading}</h3>
          <p className={styles["noti-message"]}>{message}</p>
          <button
            className={styles["noti-cancel"]}
            onClick={() => hideNotification(false)}
          >
            x
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
