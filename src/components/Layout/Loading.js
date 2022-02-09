import styles from "./Loading.module.css";
import { AnimatePresence, motion } from "framer-motion";

const loadingDivVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingBallsVariants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: "100%",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

function Loading({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles["loading-div"]}
          variants={loadingDivVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={styles["loading"]}
            variants={loadingDivVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className={styles["loading-balls"]}
              variants={loadingBallsVariants}
            ></motion.span>
            <motion.span
              className={styles["loading-balls"]}
              variants={loadingBallsVariants}
            ></motion.span>
            <motion.span
              className={styles["loading-balls"]}
              variants={loadingBallsVariants}
            ></motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
