import { Avatar } from '@mui/material';
import { useContext } from 'react';
import profilePic from '../../assets/873052.png';
import { IUser } from '../../types/maintypes';
import { myContext } from '../context';
// import profilePic from '../../assets/873052.png';

interface Props{
    width: number
    height: number
}

export const ProfilePic = (props: Props) => {

    const userObject = useContext(myContext) as IUser

    return (
        <>
            <Avatar 
            alt="Remy Sharp" 
            src= {userObject ? userObject.displayPicture : profilePic}
            sx={{ width: props.width, height: props.height }}
        />
        </>
    )
}
