import React from "react";
import { faSolid, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Testimonial1() {
  const testimonials = [
    {
      comment:
        "I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!",
      background: "rose",
      name: "Arthur Birnbaum",
      image: "/face1.jpg",
    },
    {
      comment:
        "Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough. had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!",
      background: "red",
      name: "Phoebe Kotliar",
      image: "/face2.jpg",
    },
    {
      comment:
        "Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.",
      background: "gray",
      name: "Louisa P. Huard",
      image: "/face3.jpg",
    },
    {
      comment:
        "Florin has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.",
      background: "",
      name: "Cristina Aurmoogum",
      image: "/face4.jpg",
    },
  ];

  const [testimonialSelected, setTestimonialSelected] = useState(0);

  const clsx =(...classes)=>{
   return classes.filter(Boolean).join(' ')
  }

  const handleClick = (index) => {
    setTestimonialSelected(index);
    console.log(testimonialSelected)
  };
  return (
    <div>
      <div
        className={clsx ( testimonials[testimonialSelected].background
          ? `bg-${testimonials[testimonialSelected].background}-500`
          : '' ,
          `w-[700px] h-auto mx-auto flex flex-col  p-10 items-center justify-center relative`)}
      >
        <div className="opacity-30 flex justify-center items-center mb-3">
          <i
            className="fa fa-quote-left text-6xl font-medium  "
            aria-hidden="true"
          ></i>
        </div>

        <div className="h-[250px]">
        <p className="font-poppins leading-7 tracking-widest font-thin text-gray-200 text-lg mb-8">
          {testimonials[testimonialSelected].comment}
        </p>
        </div>
        

        <h3 className="font-bold text-xl text-gray-200 self-end uppercase mb-12 ">
          {testimonials[testimonialSelected].name}
        </h3>
        <div className="flex justify-between items-center space-x-[100px]">
        {testimonials.map((testimonial, index) => {
          return (
          
              <div className="cursor-pointer focus:scale-125 focus:drop-shadow-xl " key={index} onClick={() => {
                handleClick(index);
              }}>
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden"
                />
              </div>
            
          );
        })}
        </div>
        
        {/* <div className="flex flex-row justify-between items-center space-x-[100px] ">
               <div className="cursor-pointer focus:scale-125 focus:drop-shadow-xl ">
               <img src="/face1.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
               </div>

                
              
               
                <img src="/face2.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
               
            
                <img src="/face3.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
              
               
                <img src="/face4.jpg" alt="" className="w-[50px] h-[50px] rounded-full object-cover overflow-hidden" />
            

            </div> */}

        <div className={clsx ( testimonials[testimonialSelected].background
          ? `bg-${testimonials[testimonialSelected].background}-500`
          : '' ,
          `absolute w-[660px] h-[15px] blur-md -bottom-3`)}></div>
      </div>
    </div>
  );
}
