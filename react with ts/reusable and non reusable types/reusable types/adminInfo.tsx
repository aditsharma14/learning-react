type AInfo={
    username:string;
    email:string;
    age:number;
    location:string[];
    admin:string;
};
const AdminInfo=({username,email,age,location,admin}:AInfo)=>{
    return(
        <div>
            <h1>{username}</h1>
            <h1>{email}</h1>
            <h1>{age}</h1>
            <h1>{JSON.stringify(location)}</h1>
            <h1>{admin}</h1>
        </div>
    );

};
export default AdminInfo;