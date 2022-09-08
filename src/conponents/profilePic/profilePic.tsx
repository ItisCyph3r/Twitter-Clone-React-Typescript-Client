import { Avatar } from '@mui/material';
import profilePic from '../../assets/873052.png';
// import profilePic from '../../assets/873052.png';

interface Props{
    width: number
    height: number
}

export const ProfilePic = (props: Props) => {

    return (
        <Avatar 
            alt="Remy Sharp" 
            src={profilePic} 
            sx={{ width: props.width, height: props.height }}
        />
    )
}
