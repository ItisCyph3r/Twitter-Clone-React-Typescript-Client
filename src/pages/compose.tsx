import React, { useEffect, useState } from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { ProfilePic } from '../conponents/profilePic/profilePic';


import PublicIcon from '@mui/icons-material/Public';
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { UUID } from '../conponents/getDate/getCurrentDate';
import { Link } from 'react-router-dom';

export const Compose: React.FC<{}> = () => {

    const [tweetInput, setTweetInput] = useState<string>('');

    const [displayOptions, setDisplayOptions] = useState<boolean>(false);

    const userObject = useSelector((state: any) => state.auth.userAuth);

    const [userState, setUserState] = useState({
        _id: '',
        displayPicture: ''
    });

    useEffect(() => {
        setUserState({
            _id: userObject._id,
            displayPicture: userObject.displayPicture
        })
    }, [userObject._id, userObject.displayPicture])


    const handleClick = () => {
        tweetInput.length < 280 || tweetInput.length < 4 ? SetTweet() : setTweetInput('');
        setTweetInput('');
    }

    const SetTweet = async () => {


        const data = await fetch('https://zapnodetv.onrender.com//api', {
            // const data = await fetch('http://localhost:4000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userState._id,
                tweet: tweetInput,
                uuid: UUID(),
                date: new Date()
            })
        });
        data.json();
        console.log(data);
    }

    const enableBTN = (e: any) => {
        setTweetInput(e.target.value);
    }

    const displayOptionsBTN = () => {
        setDisplayOptions(true);
    }
    return (
        <div className='block sm:hidden bg-black h-screen px-3'>
            <div className='flex justify-between items-center py-4'>
                <div>
                    <Link to='/home'>
                        <ArrowBack />
                    </Link>
                </div>
                <button
                    onClick={handleClick}
                    disabled={!tweetInput}
                    className={`bg-twitterBlue px-3 py-1 rounded-3xl  ${tweetInput ? 'opacity-100' : 'opacity-50'}`}
                >
                    <Link to='/home'>
                        Tweet
                    </Link>
                </button>
            </div>
            <div className='flex'>
                <div>
                    <ProfilePic width={44} height={44} src={userState.displayPicture} />
                </div>
                <div className='ml-4 w-full'>
                    <div>
                        <button className='bg-twitterBlue px-3 text-xs rounded-3xl'>
                            Everyone
                        </button>
                    </div>
                    {/* <textarea className='mt-5 w-max py-3 bg-black text-lg resize-none' /> */}
                    <textarea
                        className='w-full mt-5 h-12 py-0 bg-black text-lg resize-none'
                        onClick={displayOptionsBTN}
                        onChange={enableBTN}
                        placeholder="What's happening?"
                        value={tweetInput}
                    />

                    <div className='ml-2 flex'>
                        {
                            displayOptions &&
                            <>
                                <PublicIcon
                                    color="primary"
                                    fontSize="small"
                                />


                                <span className='ml-2 text-sm font-bold text-twitterBlue cursor-pointer'>
                                    Everyone can reply
                                </span>
                            </>
                        }
                    </div>

                    {
                        displayOptions && <hr className='w-full mt-3 border-gray-700' />
                    }

                    <div className='ml-2 flex'>
                        <div className='w-full mt-3 flex justify-between items-center overflow-clip'>
                            <div>
                                <CollectionsIcon className='mr-2 cursor-pointer' color="primary" />
                                <PublicIcon className='mr-2 cursor-pointer' color="primary" />
                                <GifBoxIcon className='mr-2 cursor-pointer' color="primary" />
                                <PollIcon className='mr-2 cursor-pointer' color="primary" />
                                <EmojiEmotionsIcon className='mr-2 cursor-pointer' color="primary" />
                                <ScheduleIcon className='mr-2 cursor-pointer' color="primary" />
                                <LocationOnIcon className='mr-2 cursor-pointer' color="primary" />
                            </div>

                            {/* <button onClick={handleClick} disabled={!tweetInput} className={`py-2 px-5 bg-twitterBlue text-2.5rem rounded-3xl ${tweetInput ? 'opacity-100' : 'opacity-50'}`} >
                                Tweet
                            </button> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}