import React,{useState,useEffect} from "react";
const App=()=>{
  const [count,setcount]=useState(0);
  useEffect(()=>{
    document.title=`Increment ${count}`;
    console.log({count});
  });
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}
export default App;