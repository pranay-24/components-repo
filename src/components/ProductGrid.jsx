import React from "react";
import { Link } from 'react-router-dom';
export default function ProductGrid() {
  const productData = [
    {
      image: "/image1.jpg",
      heading: "Heading 1",
      source: "/",
    },
    { image: "/image2.jpg", heading: "heading 2", source: "/" },
    { image: "/image3.jpg", heading: "heading 3", source: "/" },
  ];
  return (
  <div className="max-w-7xl grid grid-col-3 gap-4">

    {productData.map ((product, idx)=> {
      return( 
      <div key={idx} >
      <Link to={product.source} className="block relative w-50 h-50">
        <div className=" overflow-hidden"> 
            <img src={product.image} alt=" " className="object-cover w-full h-full relative bg-gradient-to-to from-black to-transparent"  />
        </div>
        <h3 className="font-saol text-base absolute bottom-0 p-2">{product.heading}</h3>
       </Link>
       </div> )
    })}

  </div>
  );
}
