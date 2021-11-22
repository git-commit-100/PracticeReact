import React, { useMemo } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";

function List(props) {
  console.log("List Running");

  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('Items Sorting');
    return items.sort();
  }, [items]);
  return (
    <div className={styles["list-div"]}>
      <h3 className={styles["title"]}>{props.title}</h3>
      <ul className={styles["num-list"]}>
        {sortedList.map((item , index) => {
          return <ListItem key={index} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default React.memo(List);
