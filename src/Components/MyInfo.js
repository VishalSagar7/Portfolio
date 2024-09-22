import React from 'react'
import ExampleComponent from './TypeAnimation';


const MyInfo = () => {
  return (
    <div className='w-[100%] lg:w-[50%] text-gray-300'>
       <h1 className='text-xl lg:text-[30px] text-violet-800 lg:mt-[10px]'>Hi, my name is</h1>
       <h1 className='text-4xl lg:text-[60px] lg:mt-[15px]'>Vishal Sagar.</h1>
       <div className='mt-[13px]'><ExampleComponent/></div>
       <p className='text-md lg:text-md leading-[25px] mt-[7px] lg:mt-[7px]'>Passionate developer skilled in crafting <span className='text-white'>efficient solutions</span>, dedicated to <span className='text-white'>continuous learning</span> and innovation.
       </p>
       <button className='bg-violet-800 hover:bg-violet-600 text-white text-md h-[30px] flex items-center justify-center rounded mt-[10px] lg:mt-5 px-2'>Know more</button>
       
    </div>
  )
}

export default MyInfo;
