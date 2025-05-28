import { useState } from "react";
function App(){
  const [count,setCount]=useState(0);
  console.log(count);
  return(
    <div>
      <h2>Count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default App;