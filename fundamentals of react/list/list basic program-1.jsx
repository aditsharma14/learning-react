const App=()=> {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <h1>My Fruit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;