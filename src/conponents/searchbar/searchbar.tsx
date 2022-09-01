import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = (e: any) => {
        setIsClicked(!isClicked);
    }

    return (
        <>
        <div onClick={handleClick} className='rounded-3xl py-3 gap-3 flex items-center bg-[#202327] px-5 my-2 focus:bg-black focus:outline-[#1D9BF0] focus:outline-1'>
            <SearchIcon />

            <input className='w-full bg-transparent px-0 text-sm' placeholder='Search Twitter'/>
        </div>
        </>
    );
}
