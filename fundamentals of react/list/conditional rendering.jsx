const App=()=> {
  const users = [
  { id: 1, name: "Jay",age:30 },
  { id: 2, name: "Ajay",age:32 },
  { id: 3, name: "Vijay",age:28 }
  ];
  return(
    <div>
      <h1>List of people</h1>
      <ul>
        {users.map((user)=>(
          user.age>=30?(
            <li key={user.id}>{user.name} is greater than or equal to 30</li>
          ):(<li key={user.id}>{user.name} is less than 30</li>)
        ))}
      </ul>
    </div>
  )

}

export default App;