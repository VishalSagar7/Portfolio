import React from 'react'
import { projecData } from './utils/ProjectData';
import Swiggyimg from '../imgs/Swiggy.png'
import CoinGeeko from '../imgs/Coingeeko.png'


const ProjectCard = () => {
  return (
    <div className='flex flex-col gap-4 w-[100%] h-[100vh] '>

      <div className='flex justify-between lg:h-[300px] items-center lg:p-[20px] border border-purple-600 rounded-lg w-[100%] '>
        <a href='https://namastereact-b909a.web.app/' target='_blank' className=''>
          <img className='w-[800px] lg:w-[600px] transition-transform duration-300 transform hover:object-center' src={Swiggyimg} alt='sw'/>
        </a>
        <h1 className='lg:mx-[70px] text-white text-sm font-medium m-[8px] lg:text-md'>akjfjhashfjl ahfhkajfjkh  ahf ka fk a;fh ha khf ahfkhahfhuhausfa fahufhahfhuha fahuifa fiahifhkaf h</h1>
      </div>

      <div className='flex justify-between lg:h-[300px] items-center lg:p-[20px] border border-purple-600 rounded-lg w-[100%] '>
        <h1 className='lg:mx-[70px] text-white text-sm font-medium m-[8px] lg:text-md'>akjfjhashfjl ahfhkajfjkh  ahf ka fk a;fh ha khf ahfkhahfhuhausfa fahufhahfhuha fahuifa fiahifhkaf h</h1>
        <a href='https://cryptoapp-e5390.web.app/' target='_blank' className=''>
          <img className='w-[800px] lg:w-[600px]' src={CoinGeeko} alt='sw'/>
        </a>
      </div>

    </div>
  )
}

export default ProjectCard;
