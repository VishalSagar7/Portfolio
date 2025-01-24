import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsArray } from '../projects'

console.log(projectsArray);


const ProjectSection = () => {
  return (
    <div className='flex justify-around flex-wrap gap-[40px] p-[20px]'>

      {
        projectsArray.map((project,id) => 
          <ProjectCard data={ project} id={id} />
        )
      }

    </div>
  )
}

export default ProjectSection;
