import { useState } from "react";
const Counter=()=>{
    const [value,SetValue]=useState<number>(0);
    console.log(value);
    return(
        <div>
            <h1>Count:{value}</h1>
            <button onClick={()=>{SetValue(value+1)}}>Increment</button>
            <button onClick={()=>{SetValue(value-1)}}>Decrement</button>
        </div>
    )
}
export default Counter;