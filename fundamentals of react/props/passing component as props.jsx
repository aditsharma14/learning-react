function Wrapper({child}){
  return(
    <div style={{padding:"10px",backgroundColor:"Red",color:"Blue"}}>{child}</div>
  )
}
function App(){
  return <Wrapper child={"I am Adit"}/>
}
export default App;