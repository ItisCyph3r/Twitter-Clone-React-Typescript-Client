import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SigninButton from '../../conponents/signin-button/signin-button';
import {FaApple, FaGithub, FaGoogle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Login: React.FC<{}> = () => {

    const googleLogin = () => {
        window.open('http://localhost:4000/auth/google', '_self', 'width=500, height=600')
    }

    const githubLogin = () => {
        window.open('http://localhost:4000/auth/github', '_self', 'width=500, height=600')
    }

    return (
        <>
            <div className='flex flex-col lg:flex-row text-white bg-black '>
                <div className="lg:w-[53.5%] h-[250px] lg:h-screen bg-loginpic order-2 lg:order-1">
                    
                </div>
                <div className='pt-9 order-1 lg:order-2 mx-5 lg:mx-10'>
                    <TwitterIcon sx={{ fontSize: 50 }}/>                

                    <p className='mt-[10px] lg:mt-[50px] text-[3.3rem] sm:text-[4rem] font-extrabold'>Happening now</p>
                    
                    <p className='mt-[20px] text-[1.5rem] font font-extrabold'>Join Twitter today.</p>
                
                    {/* <div className='relative top-[50px] left-1/2 w-1/2'> */}
                    <div className=' lg:w-[57%] mt-8'>
                        {/* <Box className='relative left-[43%]' sx={{ display: 'flex' }}> */}
                        {/* <Box className='flex justify-center' sx={{ display: 'flex' }}>
                            <CircularProgress size='25px' thickness={6}/>
                        </Box> */}
                        
                    
                        <button 
                            className={`w-full p-2 rounded-3xl font-bold text-center flex justify-center text-sm bg-white text-black mt-1` }
                            onClick={googleLogin}
                        >
                            <span className='flex items-center gap-2'> 
                                <>
                                <FaGoogle color='red'/> 
                                Sign up with Google
                                </>
                            </span>
                        </button>

                        <button 
                            className={`w-full p-2 rounded-3xl font-bold text-center flex justify-center text-sm bg-white text-black mt-5` }
                            onClick={githubLogin}
                        >
                            <span className='flex items-center gap-2'> 
                                <>
                                <FaGithub />
                                Sign up with Github
                                </>
                            </span>
                        </button>

                        

                        <hr className='w-full border-gray-700 mt-5' /> 

                        <SigninButton
                            className='mt-5'
                            text='Sign up with phone or email'
                            color='white'
                            bgColor='twitterBlue'
                            // icon={FaApple}
                        />

                        <p className='text-xs mt-2 text-grey-400'>
                            By signing up, you agree to the 
                            <span className='text-twitterBlue ml-1'>Terms of Service </span>
                            and 
                            <span className='text-twitterBlue ml-1'>Privacy Policy</span>
                            , including 
                            <span className='text-twitterBlue ml-1'>Cookie Use.</span>
                        </p>

                        <p className='mt-5 lg:mt-14 font-bold'>Already have an account?</p>

                        <Link to='/home'>
                            <SigninButton

                                className='mt-5 mb-5 outline-1 outline-gray-700 '
                                text='Sign in'
                                color='twitterBlue'
                                bgColor='black'
                                icon={FaApple}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {/* hehe */}
            </div>
        </>
    )
}




{/* <SigninButton
                            className='mt-1'
                            text='Sign up with Google'
                            color='black'
                            bgColor='white'
                            onClick={googleLogin}
                            // icon={FaApple}
                        /> */}


                    //     <SigninButton
                    //     className='mt-5'
                    //     text='Sign up with phone or email'
                    //     color='black'
                    //     bgColor='white'
                    //     icon={FaApple}
                    //     onClick={githubLogin}
                    // />