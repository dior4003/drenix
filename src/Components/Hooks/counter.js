import { useEffect, useState } from "react";

const useCounter = (type ,time=50) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter<type) {
        setCounter((prevCounter) => prevCounter + 1);
      } 
    }, time);

    return () => {
      clearInterval(interval);
    };
  });

  return counter;
};

export default useCounter;
