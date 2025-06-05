import { useForm } from "react-hook-form";
const App=()=>{
    const {register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="username" />
            <input {...register("password")} placeholder="password" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default App;