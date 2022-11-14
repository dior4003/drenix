import { useEffect, useState } from "react";
import useDelayHook from "./delayHook";

const UseTimer = (type ,time=50 ,delay ,stop) => {
  const [counter, setCounter] = useState(0);
  const [next ,setNext]=useState(false)
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter<type) {
        next? setCounter((prevCounter) => prevCounter + 1): setCounter(0);
      } 
    }, time);

    return () => {
      clearInterval(interval);
    };
  });
  useDelayHook(setNext ,delay ,stop)


  return counter;
};

export default UseTimer;
