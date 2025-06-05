import { useForm } from "react-hook-form";
function BasicForm(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const OnSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(OnSubmit)}>
            <input {...register("username",{required:"Username is required"})} placeholder="Name" />
            {errors.username&& <p>{errors.username.message}</p>}
            <select {...register("gender",{required:"Gender is required"})}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}
            <label>
                <input type="radio" value="student" {...register("role")} />
                Student
            </label>
            <label>
                <input type="radio" value="Teacher" {...register("role")} />
                Teacher
            </label>
            <label>
                <input type="checkbox" {...register("agree",{required:"Fullfill the terms"})} />
                I agree to terms
            </label>
            {errors.agree && <p>{errors.agree.message}</p>}
            <button type="submit">Submit</button>
        </form>
        
    )
}
export default BasicForm;