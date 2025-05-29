import { useContext,createContext } from "react";
const Usercontext=createContext();
const App=()=>{
  return(
    <Usercontext.Provider value="Rai">
      <Parent/>
    </Usercontext.Provider>
  )
}
const Parent=()=>{
  return(
    <Child/>
  )
  
}
const Child=()=>{
  const D=useContext(Usercontext)
  return(
    <p>Hello {D}</p>
  )
}
export default App;