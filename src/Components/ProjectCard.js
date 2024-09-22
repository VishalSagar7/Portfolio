import React from 'react'
import { Link } from 'react-router-dom';
import myWatchlist from '../imgs/myWatchlist.png'


const ProjectCard = (props) => {
    // console.log(props)
    console.log(props);

    return (
        <div className=' flex flex-col justify-between w-[41%] h-[400px] '>

            <h1 className='text-white font-poppins'>{ props.data.title }</h1>
            <div className='w-full h-[250px] overflow-hidden rounded-sm'>
                <img className=' h-[100%] w-[100%] object-cover object-center transition duration-1000 hover:scale-[103%]' src={props.data.image} alt='projectcard img' />
            </div>

            <div className=' text-black font-poppins'>
                <a href={props.data.hostedlink} target='_blank' rel='noreferrer'><button className=' px-[7px] py-[2px] rounded-sm ml-[10px] bg-white'>Demo</button></a>
                <a href={props.data.githublink} target='_blank' rel='noreferrer'><button className=' px-[7px] py-[2px] rounded-sm ml-[10px] bg-white'>github</button></a>
            </div>

            <div className='px-[10px]'>
                <h1 className='text-white font-poppins'>{props.data.description}</h1>
            </div>

        </div>
    )
}

export default ProjectCard;
