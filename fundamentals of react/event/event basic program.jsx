function App(){
  const handleclick=()=>alert("you clicked me");
  return(
    <button onClick={handleclick}>Click me</button>
  )
}
export default App;