import { useContext, useEffect, useState } from 'react';
import { ProfilePic } from '../profilePic/profilePic';
import VerifiedIcon from '@mui/icons-material/Verified';
import {FaRetweet, FaComment, FaRegHeart} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {BiComment} from 'react-icons/bi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BasicMenu from '../dropdown-menu/dropdown-menu';
import { parseCurrentDate } from '../getCurrentDate';
import { myContext } from '../context';
import { IUser } from '../../types/maintypes';


export default function Posts() {

    // const [feed, setFeed] = useState<any[]>([]);

    const [feed, setFeed] = useState<any>([]);

    // const userObject = useContext(myContext) as IUser;

    const fetchPost = async () => {
        return fetch('/api')
            .then(res => res.json())
            .then(async data => {
                // console.log(data.feed)
                await setFeed(data.feed);
            })
    }
    
    useEffect(() => {
        fetchPost()
    }, [feed])

    return (
        <>
        {/* {console.log(feed)} */}
            {
                
                feed.length !== 0 ? 
                Object.keys(feed).map((key) =>(
                    // console.log(feed[key].username)
                    feed[key].tweet.map((item: any) => (
                    <div >
                        <div className='px-3 pt-5 flex gap-2'>
                            {/* <div className=''> */}
                            {/* {feed[key].displayPicture} */}

                                <ProfilePic width={45} height= {45} src={feed[key].displayPicture}/>

                                {/* <div className='w-[1px] h-[80%] bg-gray-500 relative left-1/2'/> */}

                            {/* </div> */}
                            
                            <div className='ml-2 w-full'>
                                <div className='flex justify-between'>
                                    <div className='cursor-pointer flex items-center '>
                                        <div className='gap-8 text-sm font-bold md:max-w-[300px] max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                            {/* Name cannot be blsdaoslmdasmdamdsdf dadjsajdsajdasddnlfssdlnfsnldnlfndslfnlsn */}
                                            
                                            {feed[key].displayName}

                                            {/* <VerifiedIcon 
                                                fontSize="small" 
                                                sx={{ color: 'red-[#1D9BF0]' }}
                                            /> */}
                                        </div>
                                        <div className='opacity-50 md:text-sm text-xs flex items-center'> 
                                            <div className='md:max-w-[120px] max-w-[70px] whitespace-nowrap overflow-hidden text-ellipsis ml-1'>
                                                {/* @hackSfdnlnfsdnlfsdlfnlsdnflnnlsdadlsnndlan */}
                                                @{feed[key].username}
                                            </div>
                                            <div className='ml-1 flex items-center max-w-[100px]'>
                                                . {parseCurrentDate(item.date)}
                                            </div>
                                            
                                        </div> 
                                    </div>
                                    <div>
                                        <BasicMenu uuid ={feed[key]._id}/>
                                    </div>
                                </div>
                                
                                
                                    <div className='relative bottom-[0.1rem] text-[0.9rem]'>
                                        {item.tweet}
                                    </div>
                                
                                
                                
                                <div className='flex justify-between items-center my-3'>
                                    {/* <FaComment/> */}
                                    <BiComment />
                                    <FaRetweet />
                                    <FaRegHeart />
                                    <FiShare />
                                </div>
                            </div>
                        </div>
                        <hr className='w-full border-gray-700' /> 
                    </div>
                    ))
                )).reverse() 

                :

                <div className='relative top-[50px] left-1/2'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>
            }  
        </>       
    )
}
