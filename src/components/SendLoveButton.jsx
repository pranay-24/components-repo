import React, {useState} from 'react'
import {ArrowPathIcon, HeartIcon} from '@heroicons/react/24/solid'
export default function SendLoveButton({name}) {

    const [clickText, setClickText] = useState("")
    const [mouseDownText, setMouseDownText] = useState("")

    const clsx =(...classes)=>{
        return classes.filter(Boolean).join(' ')
       }

    const handleMouseDown =()=>{
        
        setMouseDownText(`Sent to:${name}`)
    }

    const handleClick = ()=>{
        setClickText('Thank You !')

    }
  return (
    <div className="w-full flex justify-center items-center cursor-pointer">
      {/* <div className="h-[90px] w-[500px] ">
<button className="mx-auto  flex justify-center items-center min-w-[100px] " onClick={()=>{setButtonText("Thank You !")}}>
            
            <span className="flex bg-white shadow-md  justify-center items-center focus:drop-shadow-lg p-5">
            <i className="fa-solid fa-heart text-rose-500 text-4xl "></i> 
            </span>

            <span className="  bg-rose-500 flex  justify-center items-center gap-5 shadow-md p-5 ">
            <p className="text-white uppercase text-4xl">{buttonText} </p>
            <ArrowPathIcon className="h-10 w-10 text-white " />
            </span>
        </button>
</div> */}

      <div
        className={clsx(
          clickText === "Thank You!" ? "" : "",
          "w-[90px] h-[90px] bg-white shadow-md flex justify-center items-center focus:drop-shadow-lg"
        )}
      >
        <i
          className={clsx(
            clickText === "Thank You"
              ? "transition delay-150 ease-in -translate-y-6 duration-[1000ms]"
              : "",
            "fa-solid fa-heart text-rose-500 text-3xl "
          )}
        ></i>
      </div>

      <div
        className="w-[400px] h-[90px] bg-rose-500 flex justify-center items-center gap-5 shadow-md"
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <p className="text-white uppercase text-3xl">
          {mouseDownText || clickText || (
            <div className="flex gap-2">
              <p>Send Some Love !</p>
              <ArrowPathIcon className="h-10 w-10 text-white " />
            </div>
          )}
        </p>
      </div>
    </div>
  );
}
