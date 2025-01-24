import React from 'react'
import { RiLinkedinBoxLine } from "@remixicon/react";
import {RiGithubLine} from '@remixicon/react'
import {RiInstagramLine} from '@remixicon/react'
import { RiTwitterLine } from '@remixicon/react'
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className='w-[100%] gap-4 lg:w-[100px] flex lg:flex-col lg:gap-10 items-end mt-[30px] lg:mt-0'>
      <a href="https://www.linkedin.com/in/vishal-sagar-7010b4275/" target="_blank" rel="noopener noreferrer">
        <RiLinkedinBoxLine
          size={36}
          className="text-gray-400 hover:text-white contact-icon"
        />
      </a>

      <a href="https://github.com/VishalSagar7" target="_blank" rel="noopener noreferrer">
        <RiGithubLine
          size={36}
          className="text-gray-400 hover:text-white contact-icon"
        />
      </a>

      <a href="https://www.instagram.com/vishal_s2k/" target="_blank" rel="noopener noreferrer">
        <RiInstagramLine
          size={36}
          className="text-gray-400 hover:text-white contact-icon"
        />
      </a>

      <a href="" target="_blank" rel="noopener noreferrer">
        <RiTwitterLine
          size={36}
          className="text-gray-400 hover:text-white contact-icon"
        />
      </a>

    </div>
  )
}

export default Contacts;
