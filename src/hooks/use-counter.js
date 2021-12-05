import { useState, useEffect } from "react";

const useCounter = (paramObj) => {
  const { isForwards } = paramObj;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const performCounter = setInterval(() => {
      if (isForwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => {
      clearInterval(performCounter);
    };
  }, [isForwards]);

  return counter;
};

export default useCounter;
