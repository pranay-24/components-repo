import React , {useState} from 'react'

export default function MobileView() {
    const imageList =[ {
        name:"Home",
        image:"/image1.jpg",
        tile:"fa-solid fa-house"
    },
    {
        name:"Discover",
        image:"/image2.jpg",
        tile:"fa-solid fa-box"
    },
    {
        name:"Work",
        image:"/image3.jpg",
        tile:"fa-solid fa-book-open"
    },
    {
        name:"About",
        image:"/image1.jpg",
        tile:'fa-solid fa-person'
    }]

    const [backgroundImage, setBackgroundImage] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const clsx=(...classes)=>{
        classes.filter(Boolean).join(" ")
    }

    const containerStyles = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      };

  return (
    <div className=" bg-violet-300 min-h-full">
      <div className="w-[300px] h-[600px] border border-white ring  ring-zinc-200 ring-offset-1  mx-auto relative rounded-xl">
        <div className="h-full ">
            <img src={imageList[backgroundImage].image} className="transition ease-in delay-150 opacity-1 duration-300 object-cover w-full h-full rounded-xl " alt="background" />
        </div>
        <div className=" absolute bottom-0 left-0 w-full h-[90px] flex p-3 justify-around items-center space-x-5   bg-white ">
            {
                imageList.map((im,idx)=>{
                    return (
                        
                        <div key={idx} className={clsx(idx=== backgroundImage ? "bg-violet-400":" ","flex  flex-col justify-center items-center  " )} onClick={()=>{setBackgroundImage(idx)
                        console.log(backgroundImage)
                        }}>
                        <div className={clsx()}>
                        <i  className={`${im.tile } flex justify-center  text-gray-700 items-center mb-2`}></i>
                        </div>
                      
                        <p className={clsx(idx=== backgroundImage ? "text-violet-400":" ","flex justify-center items-center  text-gray-700 font-work font-extralight")}>{im.name}</p>
                        </div>
                        
                        
                    )
                })
            }
            {/* <div className="flex flex-col justify-center items-center">
            <i id="house" class="fa-solid fa-house mb-2"></i>
            <label  className="w-fit font-work font-extralight">Home</label>
            </div>
            <div className="flex flex-col justify-center items-center">
            <i class="fa-solid fa-box mb-2"></i>
            <label  className="w-fit font-work font-extralight">Discover</label>
            </div>
            <div className="flex flex-col justify-center items-center">
            <i class="fa-solid fa-book-open mb-2"></i>
            <label  className="w-fit font-work font-extralight">Work</label>
            </div>
            <div className="flex flex-col justify-center items-center">
            <i class="fa-solid fa-person mb-2"></i>
            <label className="w-fit font-work font-extralight">About</label> 
            </div> */}
        </div>
      </div>
    </div>
  )
}
