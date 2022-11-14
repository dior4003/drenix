import { useEffect } from "react";

const useDelayHook = (setNext ,delay , stop) => {
    useEffect(() => {
        if(stop===true){
            setNext(false)
        }else{
            const timer = setTimeout(() => setNext(true), delay);
        
      
            return () => clearTimeout(timer);
        }

        
      
    });
}

export default useDelayHook