import React ,{useState} from 'react'
import {useForm } from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux' 
import {Link } from 'react-router-dom'

export default function LoginModern() {
    const [state,setState] = useState({
        email:"",
        password:"",
    })
    const {
        register,
        handleSubmit,
        formState : {errors}
    } = useForm();

    const handleInputChange =(e)=>{
        const {name, value} = e.target;
        
        setState((prevProps)=>({
            ...prevProps , 
            [name]:value
        }))
            }
   // const dispatch = useDispatch(); 
  //  const user = useSelector(selectLoggedInUser);

  return (
    <div className=" flex flex-col w-[500px] h-[300px] sm:mx-auto sm:max-w-lg border border-b-1 border-gray-500   justify-center items-center ">

        <form className="" onSubmit={(data)=>{
            // dispatch(loginAsync({
            //    email: data.email,
            //    password: data.password
            // }))
        }}>
        <div className=" grid grid-cols-4   mb-5 space-x-5">
            <label htmlFor="email" className=" col-span-1 block text-sm font-medium leading-6 text-gray-600">Email</label>
            <input type="text" 
            {...register("email",{
                required:"Email is required",
               pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message:"Email doesnt match pattern"  
                }
              
            }
            )}
            onChange={handleInputChange}  id = "email" name= "email" className=" col-span-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
            <span className="text-red-600">*</span>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className=" grid grid-cols-4   mb-5 space-x-5">
            <label htmlFor="password" className=" col-span-1 block text-sm font-medium leading-6 text-gray-600">Password</label>
            <input type="text" 
            {...register("password",{
                required:"password is required",
                            
            }
            )}
            onChange={handleInputChange}  id = "password" name= "password" className=" col-span-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            />
            <span className="text-red-600">*</span>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex justify-center">
   <button onClick={handleSubmit} className="font-bold py-2 px-4 text-white bg-violet-300 rounded-lg hover:bg-violet-500 focus:bg-violet-700">Submit</button>
   </div>

        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <Link
                  to="/signup"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Create An Account
                </Link>
              </p>    
    </div>
  )
}
