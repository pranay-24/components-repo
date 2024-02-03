import React , {useState}from 'react'
import {useForm} from 'react-hook-form'

export default function FormValidation() {
    const {register,handleSubmit, formState: {errors} } = useForm()

    const [password, setPassword] =useState({})
    const onsubmit = (data) =>{
        console.log(data)
    }

    // const handleChange=(event)=>{

    //     const {name, value} = event.target
    //     setPassword((prev)=>({...prev, [name]:value}))
    // }
  return (
    <div>
        <form  onSubmit = {handleSubmit(onsubmit)}>
        <div>
        <label htmlFor="">Username</label>
        <input type="text" {...register('username',{required:true , })} className="border border-gray-400" /> 
        {errors.username && <span>{errors.username.message}</span>}
         </div>

         <div>
        <label htmlFor="">Email</label>
        <input type="text" {...register('email',{required:true , pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/  })} className="border border-gray-400" /> 
        {errors.email && <span>{errors.email.message}</span>}
         </div>
         
         <div>
        <label htmlFor="">Password</label>
        <input type="text" name="password"  {...register('password',{required:true , })} className="border border-gray-400" /> 
        {errors.password && <span>{errors.password.message}</span>}
         </div>

         <div>
        <label htmlFor="">Retype Password</label>
        <input type="text" name="password_2" {...register('password_2',{required:true , })}  className="border border-gray-400" /> 
        {errors.password_2 && <span>{errors.password_2.message}</span>}
         </div>

         <button type="submit">Submit</button>

        </form>
   
    </div>
  )
}
