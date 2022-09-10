import axios, { AxiosResponse } from 'axios';
import { useContext } from 'react';
import { IUser } from '../../types/maintypes';
import { myContext } from '../context';

import { Link } from 'react-router-dom';

export const Logout = () => {
    console.log('working');
    axios.get('http://localhost:4000/auth/logout', {withCredentials: true})
        .then((res: AxiosResponse) => {
            if(res.data === "Logout Successful"){
                window.location.href = '/'
            }
        }
    )
}

// export default function LogoutBTN() {

//     const userObject = useContext(myContext) as IUser

//     return (
//         <>

//             {
//                 userObject ? 
//                 (
//                     <button onClick={logout}>
//                         <Link to='/'>
//                             Logout Bitch :)
//                         </Link>
//                     </button>
//                 )
                
//                 : 

//                 (
//                     <button >
//                         <Link to='/'>
//                             Hello Stranger :(
//                         </Link>
//                     </button>
//                 )
//             }
            
//         </>
//     );
// }
