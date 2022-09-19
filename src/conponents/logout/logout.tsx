import axios, { AxiosResponse } from 'axios';
import { useContext } from 'react';
import { IUser } from '../../types/maintypes';
import { myContext } from '../context';

import { Link, useNavigate } from 'react-router-dom';

// export const Logout = () => {

//     const navigate = useNavigate();
//     console.log('working');
    
// }

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
