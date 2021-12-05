import React, { useState, useEffect } from "react";
import Card from "../UI/Card";

function ForwardsCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const performCounter = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(performCounter);
    };
  }, []);

  return (
    <Card className="forwards-counter-div">
      <span className="counter">{counter}</span>
    </Card>
  );
}

export default ForwardsCounter;
