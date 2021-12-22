import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../store/index";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isVisible = useSelector((state) => state.visible);

  function handleIncrementCounter() {
    dispatch(counterSlice.actions.increment());
  }
  function handleDecrementCounter() {
    dispatch(counterSlice.actions.decrement());
  }
  function handleToggleCounter() {
    dispatch(counterSlice.actions.toggleCounter());
  }

  return (
    <Card className={styles["counter-card"]}>
      <h3 className={styles["header"]}>REDUX COUNTER</h3>
      <h3 className={styles["main-brand"]}>{`${
        isVisible ? counter : "COUNTER"
      }`}</h3>
      <div className={styles["counter-actions"]}>
        <Button onClick={handleDecrementCounter}>- Decrement</Button>
        <Button onClick={handleIncrementCounter}>+ Increment</Button>
      </div>
      <Button
        className={styles["toggle-counter-btn"]}
        onClick={handleToggleCounter}
      >
        {`${isVisible ? "Hide" : "Show"} Counter`}
      </Button>
    </Card>
  );
}

export default Counter;
