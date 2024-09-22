import React from 'react'
import AnchorTemporaryDrawer from './Drawer';

const Header = () => {

    const handleSkillsClick = () => {
        const skillssection = document.getElementById('skills-section');
        if (skillssection) {
          skillssection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const handleProjectsClick = () =>{
      const projectsection = document.getElementById('project-section');
      if(projectsection){
        projectsection.scrollIntoView({behavior:'smooth'})
      }
    }

  return (
    <div className='h-[60px] lg:h-[70px] flex justify-end items-center header'>
      <div className='flex gap-8'>
        <div id='drawer'>
            <AnchorTemporaryDrawer/>
        </div>
        <h1 onClick={handleSkillsClick} 
        className='text-gray-400 hover:text-white lg:text-lg font-semibold cursor-pointer active:text-purple-400'>Skills</h1>
        <h1 className='text-gray-400 hover:text-white lg:text-lg font-semibold cursor-pointer'
        onClick={handleProjectsClick}        
        >Projects</h1>
        <h1 className='text-gray-400 hover:text-white lg:text-lg font-semibold cursor-pointer active:text-purple-400'>Contact</h1>
      </div>
    </div>
  )
}

export default Header;
 