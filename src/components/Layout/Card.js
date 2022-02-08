import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

function Card({ className, children }) {
  return (
    <motion.div
      className={className ? `${className} ${styles["card"]}` : styles["card"]}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default Card;
