import React, { useEffect, useState } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Tweet } from '../../conponents/createTweet/createTweet';
import  Posts  from '../../conponents/tweets/posts';
import { Searchbar } from '../../conponents/searchbar/searchbar';
import { Trending } from '../../conponents/trending/trending';
import { ProfilePic } from '../../conponents/profilePic/profilePic';
import { Sidebar } from '../../conponents/sidebar/sidebar';
import { useSelector } from 'react-redux';
import '../../styles/global.util.css';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const Home: React.FC<{}> = () => {
    const userObject = useSelector((state: any) => state.auth.userAuth);

    const [userState, setUserState] = useState({
        displayPicture: ''
    });

    useEffect(()=>{
        setUserState({
            displayPicture: userObject.displayPicture
        })
    }, [userObject.username, userObject.displayName, userObject.displayPicture])
    return (
        <>
            <div className=' w-full flex overflow-hidden bg-black m-auto h-screen lg:w-[93%] relative'>
                <div className='bg-black hidden lg:w-[20%] w-[130px] sm:block'>
                    <Sidebar/>    
                </div>
                <div className=' h-screen overflow-y-scroll bg-black border-gray-700 border-x-[0.1px] feed lg:w-1/2 w-full'>  
                    <div className='font-bold flex justify-between items-center bg-black px-5 py-2'>
                        <div className='flex items-center gap-2 justify-center'>
                            <ProfilePic width={42} height={42} 
                            src={userState.displayPicture}
                            />
                            <h1 className='px-3 text-xl'> 
                                Home
                            </h1>
                        </div>

                        <AutoAwesomeIcon/>
                    </div>
                    <div className='hidden sm:block'>
                        <Tweet/>
                    </div>   
                    <Posts/>
                    <div className='absolute bottom-[5rem] right-5 block sm:hidden'>
                        <Link to='/compose/tweet'>
                            <Fab color="primary" aria-label="add" style={{color: 'twitterBlue'}}>
                                <AddIcon />
                            </Fab>
                        </Link>
                    </div>
                    
                </div>
                <div className='bg-black overflow-y-scroll hidden sm:block w-[20%] lg:w-[30%] px-5 feed'>
                    <div className='lg:block hidden'>
                        <Searchbar />
                        <Trending/>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}
