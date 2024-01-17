import React,{useState} from 'react'

export default function Sidebar() {
    const sidebarStyle = {
        transform: "translateX(-200px)",
        transition: "transform 0.3s ease-in", 
    }
    const [sidebarOpen,setSidebarOpen] = useState(false)

    const   clsx=(...classes)=>{
        return classes.filter(Boolean).join (" ")
    }

  return (
    <div className="relative">
        <button className={clsx ( sidebarOpen ?`translate-x-200`:`translate-x-0`,"absolute top-0 left-0 z-20 p-2")} onClick={()=>{setSidebarOpen(!sidebarOpen)}}>{sidebarOpen ?  <i class="fa-solid fa-xmark text-2xl"></i> : <i class="fa-solid fa-bars text-2xl"></i>}</button>
      <div className={clsx ( sidebarOpen ?`translate-x-0`:`-translate-x-[200px]` ,`absolute top-0 left-0 z-10 w-[200px] overflow-hidden h-full bg-violet-500 transition duration-[1s] transfom  min-h-[100vh]`)}>
            <div className="bg-violet-500 w-[200px] mt-[50px]" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Shop</li>
                    <li>FAQ</li>
                </ul>
            </div>
      </div>
    </div>
  )
}
