import React from 'react'
import  {faQuoteLeft}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faBars}  from '@fortawesome/free-solid-svg-icons';

export default function Testimonial() {
  return (
    <div>
      <div className="w-[500px] h-[300px] mx-auto flex flex-col bg-red-500  ">
        <div className="items-center justify-center">
            {/* <faQuoteLeft className="w-10 h-10 opacity-25 " /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}

            <p className="font-saol leading-4 text-base tracking-wide lg:text-lg ">I had my concerns that due to a tight deadline this project can't be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Florin!</p>
        </div>
      </div>
    </div>
  )
}
