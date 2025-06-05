import { useForm } from "react-hook-form";
const BasicForm=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm({
        defaultValues: {
    username: "JohnDoe",
    email: "john@example.com"}
});
    const OnSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(OnSubmit)}>
            <input {...register("username",{required:true})} placeholder="username" />
            {errors.username && <p>Pls give username</p>}
              <input {...register("password",{required:"Password is required",minLength:{value:6,message:"Min 6 characters"}})} placeholder="password" />
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit">submit</button>
            
        </form>
    )
}
export default BasicForm;