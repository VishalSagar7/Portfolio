
import Drawer from '@mui/material/Drawer';
import React from 'react';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function AnchorTemporaryDrawer() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton
                onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='text-gray-700 hover:text-white' />
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}>
                <div className='w-[200px] p-[10px] flex flex-col gap-2'>
                    <h1 className='text-gray-600 hover:text-black text-xl font-bold cursor-pointer'>About me</h1>
                    <h1 className='text-gray-600 hover:text-black text-xl font-bold cursor-pointer'>Skills</h1>
                    <h1 className='text-gray-600 hover:text-black text-xl font-bold cursor-pointer'>Projects</h1>
                    <h1 className='text-gray-600 hover:text-black text-xl font-bold cursor-pointer'>Contact</h1>
                </div>
            </Drawer>
        </div>
    );
}