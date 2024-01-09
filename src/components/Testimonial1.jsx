import React from 'react'
import  {faSolid, faQuoteLeft}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Testimonial1() {
  return (
    <div>
      <div className="w-[700px] h-auto mx-auto flex flex-col bg-rose-500 p-10 items-center justify-center relative">
        
          
           <div className="opacity-30 flex justify-center items-center mb-3">
           <i className="fa fa-quote-left text-6xl font-medium  "   aria-hidden="true"></i>
           </div>
            
           <p className="font-poppins leading-7 tracking-widest font-thin text-gray-200 text-lg mb-8">I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!</p>
        
           <h3 className="font-bold text-xl text-gray-200 self-end uppercase mb-12 ">Arthur Birnbaum</h3>

            <div className="flex flex-row justify-between items-center space-x-[100px] ">
               
                <img src="/face1.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
              
               
                <img src="/face2.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
               
            
                <img src="/face3.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
              
               
                <img src="/face4.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
            

            </div>



<div className="absolute w-[660px] h-[15px] blur-md -bottom-3 bg-rose-600">

</div>

     </div>
    </div>
  )
}
