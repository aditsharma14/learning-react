type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};
const UserInfo=({username,email,age,location}:Info)=>{
    return(
        <div>
            <h1>{username}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <h1>{JSON.stringify(location)}</h1>
        </div>
    );
};
export default UserInfo;