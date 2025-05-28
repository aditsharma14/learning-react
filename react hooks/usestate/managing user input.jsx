import React,{useState} from "react";
function App(){
  const [name,setname]=useState("");
  return(<div>
    <form>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} />
      <p>name:{name}</p>
    </form>
    
    
  </div>)
}
export default App;