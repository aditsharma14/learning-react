import { useForm } from "react-hook-form";
function BasicForm(){
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const OnSubmit=(data)=>{
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(OnSubmit)}>
            <input type="date" {...register("date",{required:"Date required"})} placeholder="Date"/>
            {errors.date&&<p>{errors.date.message}</p>}
            <input type="number" {...register("Guestno",{
                required:"Number of guests is required",min:{value:1,message:"Minimum guest is 1"},
                max: { value: 10, message: "Max 10 guests allowed" }
            })} placeholder="Guest Number" />
            {errors.Guestno && <p>{errors.Guestno.message}</p>}
            <button type="submit">Submit</button>
        </form>
    )
    
    
}
export default BasicForm;