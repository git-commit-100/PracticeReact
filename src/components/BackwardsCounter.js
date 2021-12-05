import React from "react";
import useCounter from "../hooks/use-counter";
import Card from "../UI/Card";

function BackwardsCounter() {
  const counter = useCounter({ isForwards: false });
  return (
    <Card className="backwards-counter-div">
      <span className="counter">{counter}</span>
    </Card>
  );
}

export default BackwardsCounter;
