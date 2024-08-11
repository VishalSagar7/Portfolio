import React from 'react'
import ProjectCard from './ProjectCard'
import swiggyimg from '../imgs/swiggy.png'
import coingeeko from '../imgs/Coingeeko.png'

const ProjectSection = () => {
  return (
    <div className='flex flex-wrap flex-col justify-around gap-[40px]'>

      <div className='h-[250px] bg-white w-full flex rounded overflow-hidden'>

        <div className='w-[44%] border overflow-hidden'>
           <img src={swiggyimg} alt='swiggy-img' className='h-full w-full transition duration-200 hover:scale-[102%]'/>
        </div>
        <div className='w-1/2 p-[50px] flex items-center  overflow-hidden'>
           <p className='my-auto text-lg text-gray-900 font-semibold'> I implemented this frontend project using the Swiggy's live API . React library is used for fontend, used Tailwind for styling . handled the API , understanding data layers.</p>
        </div>

      </div>


      <div className='h-[250px] bg-white w-full flex rounded overflow-hidden'>

        <div className='w-[44%] overflow-hidden'>
           <img src={coingeeko} alt='swiggy-img' className='h-full w-full transition duration-200 hover:scale-[102%]'/>
        </div>
        <div className='w-1/2 p-[50px] flex items-center border overflow-hidden'>
           <p className='my-auto text-lg text-gray-900 font-semibold'> I implemented this frontend project which gets the live prices of cryptocurrencies using the Coingeeko API . React library is used for fontend, used Tailwind for styling . </p>
        </div>

      </div>

    </div>
  )
}

export default ProjectSection;
