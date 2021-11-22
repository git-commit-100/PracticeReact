import React from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
    console.log('ListItem Running');
  return (
    <li className={styles["list-item"]}>
      <p>{props.item}</p>
    </li>
  );
}

export default React.memo(ListItem);
