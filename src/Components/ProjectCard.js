import React from 'react'
import { Link } from 'react-router-dom';
import myWatchlist from '../imgs/myWatchlist.png'
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectCard = (props) => {
    // console.log(props)
    console.log(props);

    return (
        <div className=' flex flex-col gap-1 w-[48%] px-4 py-3 rounded-lg '>

            <h1 className='text-white font-poppins'>{ props.data.title }</h1>
            <div className='w-full h-[250px] overflow-hidden'>
                <img className=' h-[100%] w-[100%] rounded-md object-cover object-center transition duration-1000 hover:scale-[103%]' src={props.data.image} alt='projectcard img' />
            </div>

            <div className=' text-black font-poppins'>
                <a href={props.data.hostedlink} target='_blank' rel='noreferrer'><button className=' px-[7px] py-[2px] text-sm rounded-md ml-[10px] text-white bg-violet-800 hover:bg-violet-600'>Demo</button></a>
                <a href={props.data.githublink} target='_blank' rel='noreferrer'><button className=' px-[7px] py-[2px] text-sm rounded-md ml-[10px] text-white bg-violet-800 hover:bg-violet-600'><GitHubIcon/> </button></a>
            </div>

            <div className='px-[10px]'>
                <p className='text-white text-sm font-poppins'>{props.data.description}</p>
            </div>

        </div>
    )
}

export default ProjectCard;
