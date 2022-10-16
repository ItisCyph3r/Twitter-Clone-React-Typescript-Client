import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SidebarLink from './sidebarlink';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';    
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ProfilePic } from '../profilePic/profilePic';
// import { Logout } from '../logout/logout';
import { IUser } from '../../types/maintypes';
// import { myContext } from '../context';
import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { display } from '@mui/system';
import VerifiedIcon from '@mui/icons-material/Verified';

export const Sidebar: React.FC<{}> = () => {
    const [userState, setUserState] = React.useState({
        userName: '',
        displayName: '',
        displayPicture: '',
        isVerified: false
    });

    const userObject = useSelector((state: any) => state.auth.userAuth);
    
    useEffect(()=>{
        setUserState({
            userName: userObject.userName,
            displayName: userObject.displayName,
            displayPicture: userObject.displayPicture,
            isVerified: userObject.isVerified
        })
    }, [userObject.userName, userObject.displayName, userObject.displayPicture, userObject.isVerified])
    
    const Logout = () => {
        axios.get('http://localhost:4000/auth/logout', {withCredentials: true})
            .then((res: AxiosResponse) => {
                console.log(res.data)
                if(res.data === "done"){
                    console.log('Logged out :)')
                    window.location.href = '/'
                }
            }
        )
    }   

    
    return (
        <>
            <div className='text-white'>
                <div className='flex justify-center lg:justify-start'>
                    <div className='py-0 px-3 mt-1'>
                        <TwitterIcon sx={{ fontSize: 40 }}/>  
                    </div>
                </div>

                <div className='flex justify-center lg:justify-start'>
                    <div className=''>

                    
                    <SidebarLink text="Home" icon={<HomeIcon/>} />
                    <SidebarLink text='Explore' icon={<TagIcon/>} />
                    <SidebarLink text="Notifications" icon={<NotificationsNoneIcon/>} />
                    <SidebarLink text='Messages' icon={<MailOutlineIcon/>} />
                    <SidebarLink text='Bookmarks' icon={<BookmarkBorderIcon/>} />
                    <SidebarLink text='Lists' icon={<ListAltIcon/>} />
                    <SidebarLink text='Profile' icon={<PermIdentityIcon/>} />
                    <SidebarLink className='cursor-pointer' text='Logout' icon={<MoreHorizIcon/>} onClick={Logout}/>
                    {/* <SidebarLink text='More' icon={<MoreHorizIcon/>} /> */}
                    </div>
                </div>
                {/* <div className='flex justify-center lg:justify-start'> */}
                <div className='flex justify-center lg:block pr-0 lg:pr-10'>
                    <div className=''>
                        <button className="py-3 mt-1 lg:w-full px-4 bg-twitterBlue text-lg rounded-3xl">
                            <div className='lg:block hidden'>
                                Tweet
                            </div>
                            <div className='lg:hidden block'>
                                <HomeIcon/>
                            </div>

                        </button>
                    </div>
                </div>

                <div className='flex justify-center lg:block'>
                    <div className="absolute bottom-5 p-3 w-auto flex items-center gap-2 hover:bg-[#181818] rounded-3xl">
                        <ProfilePic width={38} height= {38} src={userObject.displayPicture} />
                    
                        <div className='hidden lg:block'>
                            <div className='text-[0.85rem] leading-5 font-bold'>
                                <div>
                                    {userState.displayName}
                                </div> 
                                
                                
                                {/* <VerifiedIcon 
                                    fontSize="small" 
                                    sx={{ color: 'red-[#1D9BF0]' }}
                                /> */}
                            </div>
                            <div className='opacity-50 text-[0.85rem]'>                            
                                <div>
                                    @{userState.userName}
                                    {
                                        userState.isVerified ? 
                                        <VerifiedIcon 
                                            fontSize="small" 
                                            sx={{ color: 'red-[#1D9BF0]' }}
                                        />
                                        :
                                        null
                                    }
                                    
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

