const User=(props:{name:string;age:number;isstudent:boolean})=>{
    return(
        <main>
            <h1>Name:{props.name}</h1>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent.toString()}</p>
        </main>
    );
};
export default User;