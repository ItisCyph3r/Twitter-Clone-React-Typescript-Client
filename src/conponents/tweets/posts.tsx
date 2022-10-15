import { useContext, useEffect, useState } from 'react';
import { ProfilePic } from '../profilePic/profilePic';
import VerifiedIcon from '@mui/icons-material/Verified';
import {FaRetweet, FaComment, FaRegHeart} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {BiComment} from 'react-icons/bi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BasicMenu from '../dropdown-menu/dropdown-menu';
import { parseCurrentDate } from '../getDate/getCurrentDate';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../../types/maintypes';
import { useSelector } from 'react-redux';
import React from 'react';


export default function Posts() {

    const [feed, setFeed] = useState<any[]>([]);

    const [userState, setUserState] = React.useState({
        isVerified: false
    });
    
    const userObject = useSelector((state: any) => state.auth.userAuth);

    useEffect(()=>{
        setUserState({
            isVerified: userObject.isVerified
        })
    }, [userObject.isVerified])


    useEffect(() => {
        axios.get("https://zapnode-twitter-clone-backend.herokuapp.com/api")
        // axios.get("http://localhost:4000/home/api")
        .then((res: AxiosResponse) => {
            if (res.data) {
                setFeed(res.data);
            } 
        })
    }, [feed])

    return (
        <>
            {
                
                feed.length !== 0 ? 
                
                    feed.map((element: any) => (

                    <div key={element._id}>
                        <div className='px-3 pt-5 flex gap-2'>
                            <ProfilePic 
                                width={45} 
                                height= {45} 
                                src={element.displayPicture}
                            />
                                
                            <div className='ml-2 w-full'>
                                <div className='flex justify-between'>
                                    <div className='cursor-pointer flex items-center '>
                                        <div className='gap-8 text-sm font-bold md:max-w-[300px] max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>                                           
                                            {element.displayName}

                                        
                                        </div>
                                        <div className='opacity-50 md:text-sm text-xs flex items-center'> 
                                            <div className='md:max-w-[120px] max-w-[70px] whitespace-nowrap overflow-hidden text-ellipsis ml-1'>
                                                @{element.userName}
                                                {
                                                    userState.isVerified === true ?
                                                        <VerifiedIcon 
                                                        fontSize="small" 
                                                        sx={{ color: 'red-[#1D9BF0]' }}
                                                        />
                                            
                                                    :
                                                    null
                                                }
                                            </div>
                                            <div className='ml-1 flex items-center max-w-[100px]'>
                                                . {parseCurrentDate(element.date)}
                                            </div>
                                            
                                        </div> 
                                    </div>
                                    <div>
                                        <BasicMenu uuid ={element._id}/>
                                    </div>
                                </div>
                                
                                
                                    <div className='relative bottom-[0.1rem] text-[0.9rem]'>
                                        {element.tweet}
                                    </div>
                                
                                
                                
                                <div className='flex justify-between items-center my-3'>
                                    <BiComment />
                                    <FaRetweet />
                                    <FaRegHeart />
                                    <FiShare />
                                </div>
                            </div>
                        </div>
                        <hr className='w-full border-gray-700' /> 
                    </div>
                    )).reverse() 

                :

                // <div className='relative top-[50px] left-1/2'>
                <div className='flex justify-center mt-10'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>
            }  
        </>       
    )
}
