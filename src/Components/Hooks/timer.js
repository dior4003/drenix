import { useEffect, useState } from "react";

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
  useEffect(() => {
    if(stop===true){
      setNext(false)
    }else{
      const timer = setTimeout(() => setNext(true), delay);
      return () => clearTimeout(timer);
    }
    
  });


  return counter;
};

export default UseTimer;
