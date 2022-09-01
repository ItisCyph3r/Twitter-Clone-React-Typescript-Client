import React from 'react';
import TrendingCard from './trendingCard';

export default function Trending() {
    return (
        <>
            <div className='bg-[#202327] rounded-3xl py-5 my-10'>
                <p className='text-lg font-bold px-5 mb-2'> Trends for you </p>
                
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
            </div>
            
        </>
    );
}
