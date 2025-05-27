const App=()=> {
  const users = [
  { id: 1, name: "Jay" },
  { id: 2, name: "Ajay" },
  { id: 3, name: "Vijay" }
  ];
  return(
    <div>
      <h1>List of people</h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )

}

export default App;