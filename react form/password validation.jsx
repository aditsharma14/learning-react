import { useForm } from "react-hook-form";
function BasicForm(){
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const OnSubmit=(data)=>{
        console.log(data);
    }
    const password=watch("password");
    return(
        <form onSubmit={handleSubmit(OnSubmit)}>
            <input type="password" placeholder="password" 
            {...register("password",{required:"Password is required"})}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder="Confirm Password"
            {...register("ConfirmPassword",{
                validate:value=>value==password||"Password do not match"
            })} />
            {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}
export default BasicForm;