const Greet=()=>{
    const date=new Date();
    return(
        <div>
            <h1>Welcome!</h1>
            <p>Date:{date.getDate()}</p>
        </div>
        
    )
}
export default Greet;