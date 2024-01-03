import React, { useState } from 'react'

import './Login.css'
export default function Login() {

    const [state,setState] = useState({
        email:"",
        password:"",
    })

    const handleInputChange =(e)=>{
const {name, value} = e.target;

setState((prevProps)=>({
    ...prevProps , 
    [name]:value
}))
    }

const handleSubmit =(e)=>{
e.preventDefault();
console.log(state);
    }

  return (

    <div className="flex flex-col w-[500px] h-[300px] sm:mx-auto sm:max-w-lg border border-b-1 border-gray-500  items-center justify-center ">

   
    < div className=" grid grid-cols-4   mb-5 space-x-5">
    <label htmlFor="email" className=" col-span-1 block text-sm font-medium leading-6 text-gray-600">Email</label>
    
    
      <input onChange={handleInputChange} type="text" id = "email" name= "email" className=" col-span-2 border border-b p-1 hover:cursor-pointer focus: ring-violet-300 "/>
      <span className="text-red-600 ">*</span>
      <span id="email_error" className="col-span-1 text-red-500"></span>
    </div>

    <div className=" grid grid-cols-4 items-center  mb-5 space-x-5">
    <label htmlFor="password" className="col-span-1 block text-sm font-medium leading-6 text-gray-600">Password</label>
      <input onChange={handleInputChange} type="password" id = "password" name= "password" className=" col-span-2  border p-1 hover:cursor-pointer focus: ring-violet-300"/>
      <span className="text-red-600 ">*</span>  
      <span id="password_error" className="col-span-1  text-red-500" > </span>
    </div>

   <div className="flex justify-center">
   <button onClick={handleSubmit} className="font-bold py-2 px-4 text-white bg-violet-300 rounded-lg hover:bg-violet-500 focus:bg-violet-700">Submit</button>
   </div>
     
   
    </div>
   
  )
}
