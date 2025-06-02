//destructuring props with inline types
const User=({name,age,isstudent}:{name:string;age:number;isstudent:boolean})=>{
    return(
        <main>
            <h1>Name:{name}</h1>
            <p>Age:{age}</p>
            <p>Student:{isstudent.toString()}</p>
        </main>
    );
};
export default User;