import React, { useState, useEffect } from "react";
import Card from "../UI/Card";

function BackwardsCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const performCounter = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => {
      clearInterval(performCounter);
    };
  }, []);
  return (
    <Card className="backwards-counter-div">
      <span className="counter">{counter}</span>
    </Card>
  );
}

export default BackwardsCounter;
