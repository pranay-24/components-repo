import React, { useState, useRef } from "react";
import "./css/SearchIcon.css";

export default function SearchIcon() {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    inputRef.current.focus();

    console.log(show);
  };

  const clsx = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  //make the component reusable by paramterizing the with of input, border color, background coloretc
  return (
    <div className=" my-[250px] flex justify-center items-center">
      <div className="  h-[50px] relative">
        <input
          ref={inputRef}
          type="text"
          className={clsx(
            show ? "inputransition" : "initialinput",
            ` `
          )}
          placeholder="Search..."
        />
        <div
          className={clsx(
            show ? "translatetoX" : "",
            `absolute top-0 left-0 flex justify-center items-center  w-[50px] h-full bg-white border border-black cursor-pointer`
          )}
          onClick={handleClick}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}
