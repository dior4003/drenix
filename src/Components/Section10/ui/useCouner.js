import UseTimer from "../../Hooks/timer";



const Writer =(str ,delay ,stop)=>{
    let con =UseTimer(str.length , 100 ,delay ,stop);
     
    return str.substring(0 , con )
  }
export default Writer;
