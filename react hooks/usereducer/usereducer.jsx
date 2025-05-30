import React,{useReducer} from "react";
const initialstate={count:0};
function Reducer(state,action){
    switch(action.type){
        case "increment":
            return {count:state.count+1};
        case "decrement":
            return {count:state.count-1};
        case "reset":
            return initialstate;
        
    }
}
function Counter(){
    const [state,dispatch]=useReducer(Reducer,initialstate);
    return(
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}
export default Counter;
