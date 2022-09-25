import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
// import { myContext } from './conponents/context';
// import { myContext } from './conponents/context';
import BasicModal from './conponents/modal/loginModal';
import { Home } from './pages/homepage/home';
import { Login } from './pages/loginpage/loginpage';
import { authActions } from './store/auth-Slice';
// import LoginAPI from './store/login';
import { IUser } from './types/maintypes';

export const App: React.FC<{}> = () => {

    // const userObject = useContext(myContext) as IUser;
    // console.log(userObject);

    // const notification = useSelector((state: any) => state.auth.userAuth);

    // console.log(notification, 'adasda');

    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://localhost:4000/getuser", { withCredentials: true} )
        .then((res: AxiosResponse) => {
            if (res.data) {
                // console.log(res.data)
                // setUserObject(res.data)
                dispatch(authActions.login(res.data))
            }
        })
    })
    
    return (
        <>
        
            <div className='App'>
                
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/home" element={ <Home/> } />






                    {/* { <Route path="/home" element={ <Home/> } /> } */}
                </Routes>
            </div>
        </>
    )
}




// import React, { useContext } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import "./App.css";
// // import { myContext } from './conponents/context';
// import { myContext } from './conponents/context';
// import BasicModal from './conponents/modal/loginModal';
// import { Home } from './pages/homepage/home';
// import { Login } from './pages/loginpage/loginpage';
// import { IUser } from './types/maintypes';

// export const App: React.FC<{}> = () => {

//     const userObject = useContext(myContext) as IUser;
//     // console.log(userObject);
//     let navigate = useNavigate();
//     return (
//         <Routes>
//             <>
//             <Route path="/" element={ <Login/> } />
//             {userObject 
//             ? 
//             <Route path="/home" element={ <Home/> } /> 
//             : 
//             navigate("/")
//             }
//             </>
//         </Routes>   
//     )

// }

