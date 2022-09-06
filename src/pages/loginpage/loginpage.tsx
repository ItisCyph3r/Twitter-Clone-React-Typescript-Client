import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SigninButton from '../../conponents/signin-button/signin-button';
import Divider from '@mui/material/Divider';

export const Login: React.FC<{}> = () => {
    return (
        <div className='flex flex-column lg:flex-row text-white bg-black h-screen'>
            <div className="w-[53.5%] h-screen bg-loginpic">
                
            </div>
            <div className='p-9'>
                <TwitterIcon sx={{ fontSize: 50 }}/>  

                <p className='mt-[50px] text-[4.3rem] font-extrabold'>Happening now</p>
                
                <p className='mt-[20px] text-[2rem] font font-extrabold'>Join Twitter today.</p>
            
                {/* <div className='relative top-[50px] left-1/2 w-1/2'> */}
                <div className='w-[53%] mt-8'>
                    <Box className='relative left-[48%]' sx={{ display: 'flex' }}>
                        <CircularProgress size='25px' thickness={6}/>
                    </Box>
                    
                    <SigninButton
                        text='Sign up with Apple'
                        color='black'
                        bgColor='white'
                    />

                    <Divider> or </Divider>
                </div>
            </div>
        </div>
    )
}