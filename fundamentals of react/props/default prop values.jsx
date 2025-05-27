function Greeting({name="Ravi",age="12"}){
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Age:{age}</p>
    </div>
    
  )
}
function App(){
  return<Greeting/>
}
export default App;