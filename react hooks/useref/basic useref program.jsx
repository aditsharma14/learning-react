import React,{ useRef } from "react";
const App=()=>{
    const inputref=useRef(null);
    const focus=()=>{
        inputref.current.focus();
    }
    return(
        <div>
            <input type="text" ref={inputref} placeholder="type" />
            <button onClick={focus}>Focus Button</button>
        </div>
    )
}
export default App;