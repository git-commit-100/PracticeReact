import React from "react";
import Card from "../UI/Card";
import useCounter from "../hooks/use-counter";

function ForwardsCounter() {
  const counter = useCounter({ isForwards: true });

  return (
    <Card className="forwards-counter-div">
      <span className="counter">{counter}</span>
    </Card>
  );
}

export default ForwardsCounter;
