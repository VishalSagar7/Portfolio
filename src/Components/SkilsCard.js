import React from 'react'
import { skills } from './utils/Skills';

const SkilsCard = () => {
  return (
    <div className='flex flex-wrap gap-x-[80px] gap-y-[40px] justify-start'>
      {
        skills.map((card)=>{
          return (
            <div className='border border-purple-600 w-[250px] h-[80px] p-[15px] flex justify-start items-center transition-transform duration-200 hover:translate-y-[-6px] rounded-md'>
              <img className='h-[50px] inline' src={card.img} alt='javascript'/>
              <h1 className='inline pl-[15px] text-gray-200 text-xl font-medium'>{card.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default SkilsCard;
