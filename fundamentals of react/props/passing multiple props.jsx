function Greeting(props){
  return(
    <div>
      <h1>Hello,{props.name}</h1>
      <p>Age:{props.age}</p>
    </div>
    
  )
}
function App(){
  return<Greeting name="Raj" age={30}/>
}
export default App;