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
import ExitToAppRounded from '@mui/icons-material/ExitToAppRounded';
import HomeIcon from '@mui/icons-material/Home';    
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link, useNavigate } from 'react-router-dom';
import MobileSidelink from '../../conponents/sidebar/mobileSidelink';
import axios, { AxiosResponse } from 'axios';
import './home.css';

export const Home: React.FC<{}> = () => {
    const userObject = useSelector((state: any) => state.auth.userAuth);

    const [userState, setUserState] = useState({
        displayName: '',
        displayPicture: '',
        userName: ''
    });

    const [sideNav, setSideNav] = useState<boolean>(false)

    const displayNavbar = async () => {
        await setSideNav(true)
    }
    const closeNavbar = async () => {
        await setSideNav(false)
    }
    useEffect(()=>{
        setUserState({
            userName: userObject.userName,
            displayName: userObject.displayName,
            displayPicture: userObject.displayPicture
        })
    }, [userObject.userName, userObject.displayName, userObject.displayPicture])


    let navigate = useNavigate(); 

    const Logout = () => {
        axios.get('http://localhost:4000/auth/logout', {withCredentials: true})
        // axios.get('https://zapnode-twitter-clone-backend.herokuapp.com/auth/logout', {withCredentials: true})
        
            .then((res: AxiosResponse) => {
                console.log(res.data)
                if(res.data === "done"){
                    console.log('Logged out :)')
                    // window.location.href = '/'
                    navigate('/');
                }
            }
        )

    }   
    return (
        <>
            {
                userObject ? 
                <div className=' w-full flex overflow-hidden bg-black m-auto h-screen lg:w-[93%] relative'>
                    <div className='bg-black hidden lg:w-[20%] w-[130px] sm:block'>
                        <Sidebar/>    
                    </div>
                    <div className=' h-screen overflow-y-scroll bg-black border-gray-700 border-x-[0.1px] feed lg:w-1/2 w-full relative'>  
                        <div className='font-bold flex justify-between items-center bg-black px-5 py-2  w-full'>
                            <div className='flex items-center gap-2 justify-center'>
                                <div onClick={displayNavbar}>
                                    <ProfilePic 
                                        width={42} 
                                        height={42} 
                                        src={userState.displayPicture}
                                    />
                                </div>
                                
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
                        
                        
                        
                        
                    </div>
                    <div className='bg-black overflow-y-scroll hidden sm:block w-[20%] lg:w-[30%] px-5 feed'>
                        <div className='lg:block hidden'>
                            <Searchbar />
                            <Trending/>
                        </div>
                        
                    </div>
                    <div className='absolute bottom-[5rem] right-5 block sm:hidden z-5'>
                            <Link to='/compose/tweet'>
                                <Fab color="primary" aria-label="add" style={{color: 'twitterBlue'}}>
                                    <AddIcon />
                                </Fab>
                            </Link>
                    </div>
                    { 
                        sideNav &&
                        <div className='h-full w-[100%] absolute top-0 flex z-[999] overflow-hidden'>
                            <div className='w-[65%] bg-black h-full'>
                                <div className='px-3'>
                                    <div className='py-4 flex justify-between font-extrabold'>
                                        <div>
                                            Account Info
                                        </div>
                                        <div onClick={closeNavbar}>
                                            <ExitToAppRounded />
                                        </div>
                                    </div>
                                    <div>
                                        <ProfilePic width={48} height={48} src={userState.displayPicture}/>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='text-[1rem] leading-5 font-bold'>                                        
                                            {userState.displayName}                                             
                                        </div>
                                        <div className='opacity-50 text-sm mt-1'>                            
                                            {userState.userName}
                                        </div>
                                    </div>
                                    <div className='mt-3 flex text-sm'>
                                        <div className='flex items-center'>
                                            <div className='leading-5 font-bold'>
                                                1M
                                            </div>
                                            <div className='opacity-50 ml-1'>                            
                                                Following                                        
                                            </div>
                                        </div>
                                        <div className='flex ml-3 items-center'>
                                            <div className='leading-5 font-bold'>
                                                1M
                                            </div>
                                            <div className='opacity-50 ml-1'>                            
                                                Followers                                       
                                            </div>
                                        </div>
                                    </div>  
                                    <div className='text-[1.05rem] mt-2'>                      
                                        <MobileSidelink icon={<HomeIcon/>} text='Home' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<TagIcon/>} text='Explore' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<NotificationsNoneIcon />} text='Notifications' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<MailOutlineIcon/>} text='Messages' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<BookmarkBorderIcon/>} text='Bookmarks' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<ListAltIcon/>} text='Lists' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<PermIdentityIcon/>} text='Profile' className='cursor-pointer' /> 
                                        <MobileSidelink icon={<MoreHorizIcon/>} text='Logout' className='cursor-pointer' onClick={Logout}/> 
                                    </div>
                                </div>    
                            </div>
                            <div className='h-full bg-white w-[35%] opacity-[20%]' onClick={closeNavbar} />                                    
                        </div>
                    }
            </div>
            :
            // navigate('/')
            console.log('Home')
                
            }
            
        </>
    );
}
