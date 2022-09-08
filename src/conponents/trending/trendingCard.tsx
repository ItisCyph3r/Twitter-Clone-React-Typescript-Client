import React from 'react';
import BasicMenu  from '../dropdown-menu/dropdown-menu';

export default function TrendingCard() {
    return (
        <>
            <div className='cursor-pointer hover:bg-[#1D1F23] p-5'>
                <div className='flex justify-between items-end'>
                    <p className=' text-xs opacity-50 leading-tight'>
                        Trending in Nigeria
                    </p>
                    <BasicMenu />
                </div>
                
                <p className='mt-0 text-lg bold'>
                    Trending in Nigeria
                </p>
                <p className='mt-0 text-xs opacity-50 leading-tight'>
                    69.420k Tweets
                </p>
            </div>
        </>
    );
}
