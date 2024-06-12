import React from 'react'
import { RiLinkedinBoxLine } from "@remixicon/react";
import {RiGithubLine} from '@remixicon/react'
import {RiInstagramLine} from '@remixicon/react'
import {RiTwitterLine} from '@remixicon/react'

const Contacts = () => {
  return (
    <div className='w-[100%] gap-4 lg:w-[100px] flex lg:flex-col lg:gap-10 items-end mt-[30px] lg:mt-0'>
      <RiLinkedinBoxLine
      size={36}
      className='text-gray-400 hover:text-white contact-icon'
      />
      <RiGithubLine
      size={36}
      className='text-gray-400 hover:text-white contact-icon'
      />
      <RiInstagramLine
      size={36}
      className='text-gray-400 hover:text-white contact-icon'
      />
      <RiTwitterLine
      size={36}
      className='text-gray-400 hover:text-white contact-icon'
      />
    </div>
  )
}

export default Contacts;
