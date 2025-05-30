import React,{ useEffect, useRef } from "react";
import { use } from "react";
const App=()=>{
    const userinput=useRef(null);
    useEffect(()=>{
        userinput.current.focus();
    },[]);
    return(
        <div>
            <input type="text" placeholder="type here" ref={userinput} />
        </div>
    )
}
export default App;