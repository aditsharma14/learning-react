import UserInfo from "./assets/UserInfo";
import AdminInfo from "./assets/adminInfo";
const App=()=>{
  return(
    <>
      <h1>Admin Info</h1>
      <AdminInfo
        username="Adit Sharma"
        age={23}
        admin="Senior Admin"
        location={["Delhi","Kailash Nagar"]}
        email="adkfnjsqnd@djjej.vnd"
      />
      <h1>Users Info</h1>
      <UserInfo
        username="Ram Kumar"
        age={44}
        email="sdjennd@ndfj.csa"
        location={["Mumbai","Thane"]}
      />
    </>
  )
}
export default App;