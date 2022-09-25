import React, { useContext } from 'react';
import { ProfilePic } from '../profilePic/profilePic';
import VerifiedIcon from '@mui/icons-material/Verified';
import {FaRetweet, FaComment, FaRegHeart} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
// import { myContext } from '../context';
import { IUser } from '../../types/maintypes';

export const Threads: React.FC<{}> = () => {
    // const userObject = useContext(myContext) as IUser;

    return (
        <>
            <div className='px-3 pt-5 flex gap-2'>
                <div className=''>

                    <ProfilePic 
                    width={50} 
                    height= {50} 
                    // src={userObject.displayPicture}
                    />

                    <div className='w-[1px] h-[80%] bg-gray-500 relative left-1/2'/>

                </div>
                
                <div className='ml-2'>
                    <div className='cursor-pointer flex flex-col sm:items-center sm:flex-row'>
                        <div className='gap-8'>
                            The Kingslayer🙃😈
                            <VerifiedIcon 
                                fontSize="small" 
                                sx={{ color: 'red-[#1D9BF0]' }}
                            />
                        </div>
                        <div className='opacity-50 text-sm'> 
                            @serjaimelannister . 13h
                        </div> 
                    </div>
                    <div className='mt-1 text-[0.9rem]'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus diam nonumyiseio.
                    </div>
                    <div className='flex justify-between items-center my-3'>
                        <FaComment/>
                        <FaRetweet/>
                        <FaRegHeart/>
                        <FiShare/>
                    </div>
                </div>
            </div>
            <div className='px-[1.25rem] flex items-center pb-2 py-1 mt-0 hover:bg-[#101010]'>
                <ProfilePic  
                width={35} 
                height= {35} 
                // src={userObject.displayPicture}
                />

                <div className='px-5 text-[#1D9BF0] text-sm leading-tight cursor-pointer mt-1'>
                    Show this thread
                </div>
            </div>
            <hr className='w-full border-gray-700' />
        </>
    );
}
