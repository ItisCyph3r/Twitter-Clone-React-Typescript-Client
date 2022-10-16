import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import BasicModal from './conponents/modal/loginModal';
import { Home } from './pages/homepage/home';
import { Login } from './pages/loginpage/loginpage';
// import Status from './pages/status'
// import { Status } from './pages/status/status';
import { authActions } from './store/auth-Slice';
import "./App.css";
import { Compose } from './pages/compose';

export const App: React.FC<{}> = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://zapnode-twitter-clone-backend.herokuapp.com/getuser", { withCredentials: true} )
        // axios.get("http://localhost:4000/getuser", { withCredentials: true} )
        .then((res: AxiosResponse) => { 
            if (res.data) {
                dispatch(authActions.login(res.data))
            }
        })
    })
    
    return (
        <>
        
            <div className='App'>
                
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    {/* <PrivateRoute path="/onlyAuthorizedAllowedHere/" component={MyComponent} /> */}
                    <Route path="/home" element={ <Home/> } />
                    <Route path="/compose/tweet" element={ <Compose/> } />
                    {/* <Route path="/status" element={ <Status/> } /> */}
                </Routes>
            </div>
        </>
    )
}
