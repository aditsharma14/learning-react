import React, { useEffect,useState } from "react";
function Timer(){
  const[second,newsecond]=useState(0);
  const[hour,newhour]=useState(0);
  useEffect(()=>{
    console.log(`New second:${second}`);
  },[second])
  return(
    <div>
      <h1>{hour}</h1>
      <button onClick={()=>{newsecond(second+1)}}>Increment Second</button>
      <button onClick={()=>{newsecond(second-1)}}>Decrement Second</button>
      <button onClick={()=>{newhour(hour+1)}}>Increment Hour</button>
      <button onClick={()=>{newhour(hour-1)}}>Decrement Hour</button>
    </div>
  )
}
export default Timer;