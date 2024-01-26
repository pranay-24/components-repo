import React from 'react'

export default function RotateImage() {
  return (
    <div className='mx-auto'>
      <div className="flex flex-col w-[500px] gap-1">
        <img className='w-full h-[300px] object-cover ' src="face3.jpg" alt="" />

        <div className='w-full h-[150px] bg-gradient-to-b from-gray-800 to-gray-10'>
        <img className='w-full h-[150px] object-cover rotate-180 opacity-40' src="face3.jpg" alt="" />
        </div>
       
      </div>
    </div>
  )
}
