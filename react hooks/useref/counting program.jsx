import React,{ useRef } from "react";
const App=()=>{
    const counter=useRef(0);
    const adder=()=>{
        counter.current+=1;
        alert(`you clicked the button ${counter.current} times`);
    }
    return(
        <div>
            <button onClick={adder}>Add value</button>
        </div>
    )
}
export default App;