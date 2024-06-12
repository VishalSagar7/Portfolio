import React from 'react'
import Header from './Header';
import MyInfo from './MyInfo';
import Contacts from './Contacts';
import SkilsCard from './SkilsCard';
import ProjectCard from './ProjectCard';
import BacktoTop from './BacktoTop';


const Body = () => {
  return (
    <>
    
    <div className='body relative font-poetse'>
        
      <div className='lg:h-[100vh] px-[30px] lg:px-[130px]' id='home'>
        <Header/>
        <div className='w-[100%] lg:flex lg:justify-between lg:items-center h-[320px] lg:h-[300px] mt-[100px] lg:mt-[90px]'>
            <MyInfo/>
            <Contacts/>
        </div>
      </div>
      <div id='skills-section' className='lg:mx-[120px] lg:py-[10px] h-[100vh]'>
        <h1 className='text-gray-200 text-[35px] mb-[15px]'>Skillstack</h1>
        <SkilsCard/>
      </div>
      <div id='project-section' className='lg:mx-[120px] py-[10px]'>
      <h1 className='text-gray-200 text-[35px] mb-[15px]'>Projects</h1>
        <ProjectCard/>
      </div>
      <BacktoTop/>
    </div>
    </>
  )
}

export default Body;
