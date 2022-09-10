import { useEffect, useState } from 'react';
import { ProfilePic } from '../profilePic/profilePic';
import VerifiedIcon from '@mui/icons-material/Verified';
import {FaRetweet, FaComment, FaRegHeart} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {BiComment} from 'react-icons/bi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BasicMenu from '../dropdown-menu/dropdown-menu';
import { parseCurrentDate } from '../getCurrentDate';

export const Posts: React.FC<{}> = () => {

    const [feed, setFeed] = useState<any[]>([]);

    const fetchPost = async () => {
        return fetch('/api')
            .then(res => res.json())
            .then(data => {
                setFeed(data.tweet);
            })
    }
    
    useEffect(() => {
        fetchPost()
    }, [feed])

    return (
        <>
            {/* {feed.map((ffs) => {console.log(ffs._id)})} */}
            {
                feed.length !== 0 ? 
                feed.map((element) => (
                    <div key={element.id}>
                        {/* {console.log(element)} */}
                        <div className='px-3 pt-5 flex gap-2' id={element.id}>
                            <div className=''>

                                <ProfilePic width={50} height= {50}/>

                                {/* <div className='w-[1px] h-[80%] bg-gray-500 relative left-1/2'/> */}

                            </div>
                            
                            <div className='ml-2 w-full'>
                                <div className='flex justify-between'>
                                    <div className='cursor-pointer flex items-center '>
                                        <div className='gap-8 text-sm font-bold md:max-w-[300px] max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                            Name cannot be blsdaoslmdasmdamdsdf dadjsajdsajdasddnlfssdlnfsnldnlfndslfnlsn
                                            {/* <VerifiedIcon 
                                                fontSize="small" 
                                                sx={{ color: 'red-[#1D9BF0]' }}
                                            /> */}
                                        </div>
                                        <div className='opacity-50 md:text-sm text-xs flex items-center'> 
                                            <div className='md:max-w-[120px] max-w-[70px] whitespace-nowrap overflow-hidden text-ellipsis ml-1'>
                                                @hackSfdnlnfsdnlfsdlfnlsdnflnnlsdadlsnndlan
                                            </div>
                                            <div className='ml-0 flex items-center max-w-[100px]'>
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
                )).reverse() : 
                <div className='relative top-[50px] left-1/2'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>
                
            }
            
        </>
    );
}
