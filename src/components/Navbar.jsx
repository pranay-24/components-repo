import React from 'react'
import {Menu} from '@headlessui/react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const userRole = "user";

    const clsx =(...classes)=>{
       return classes.filter(Boolean).join("")
    }

    const menuitems = [ {
        name: "Men",
  link: "/men",
  current: true, // Whether this link represents the current page
  admin: false,   // Accessible to users with the 'admin' role
  user: true,   // Accessible to users with the 'user' role

    } , 
{
    name: "Women",
  link: "/women",
  current: false, // Whether this link represents the current page
  admin: false,   // Accessible to users with the 'admin' role
  user: true,   // Accessible to users with the 'user' role

    },
    {name: "Electronics",
    link: "/electronics",
    current: false, // Whether this link represents the current page
    admin: false,   // Accessible to users with the 'admin' role
    user: true,   // Accessible to users with the 'user' role
  
      },
      {name: "Order",
      link: "/order",
      current: false, // Whether this link represents the current page
      admin: true,   // Accessible to users with the 'admin' role
      user: false ,   // Accessible to users with the 'user' role
    
        }
];
  return (
    <div className="min-h-full">
      
      <div className="flex items-center ">


      <Link to="/">
        <div className=" flex items-center flex-shrink-0">
       
        <img src="/logo192.png" className="w-10 h-10 rounded-full" alt="Logo" />
        <h2 className="ml-3">CartShop</h2>
       
        </div>
    </Link>

        <div className="hidden md:block">
            <div className="flex ml-10 space-x-5 ">
            {menuitems.map((item,idx)=>{
        return(
        <>
        {item[userRole] ? <>
        <Link to={item.link} key={idx} className={clsx(item.current ? "text-grey-700" :"text-grey-400" , "rounded-md px-3 py-2 text-sm font-medium")}>
            {item.name}

        </Link>
        </> : null}
        </>)
       })
       }
            </div>
     
        
        </div>
      
       
      </div>
    </div>
  )
}
