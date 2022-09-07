import React from 'react';
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
import ProfilePic from '../profilePic/profilePic';
// import VerifiedIcon from '@mui/icons-material/Verified';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar text-white pr-8">
                <div className='py-2 px-3'>
                    <TwitterIcon sx={{ fontSize: 40 }}/>  
                </div>
                
                <SidebarLink text="Home" icon={<HomeIcon/>} />
                <SidebarLink text='Explore' icon={<TagIcon/>} />
                <SidebarLink text="Notifications" icon={<NotificationsNoneIcon/>} />
                <SidebarLink text='Messages' icon={<MailOutlineIcon/>} />
                <SidebarLink text='Bookmarks' icon={<BookmarkBorderIcon/>} />
                <SidebarLink text='Lists' icon={<ListAltIcon/>} />
                <SidebarLink text='Profile' icon={<PermIdentityIcon/>} />
                <SidebarLink text='More' icon={<MoreHorizIcon/>} />

                <button className="py-3 mt-3 w-full px-5 bg-twitterBlue text-lg rounded-3xl" >
                    Tweet
                </button>
            </div>

            <div className="mt-20 mr-10 p-3 w-[95%] flex items-center gap-2 hover:bg-[#181818] rounded-3xl">
                {/* <ProfilePic width={38} height= {38}/> */}
                <ProfilePic width={33} height= {33}/>

                <div>
                    <div className='text-[0.85rem] leading-5 font-bold'>
                        The Kingslayer
                        {/* <VerifiedIcon 
                            fontSize="small" 
                            sx={{ color: 'red-[#1D9BF0]' }}
                        /> */}
                    </div>
                    <div className='opacity-50 text-[0.85rem]'> 
                        @serjaimelannister
                    </div>
                </div>
            </div>
        </>
    );
}
