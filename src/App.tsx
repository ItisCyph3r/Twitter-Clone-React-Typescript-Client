import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { Home } from './pages/homepage/home';
import { Login } from './pages/loginpage/loginpage';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/home" element={ <Home/> } />
                    {/* <Route path="contact" element={ <Contact/> } /> */}
                </Routes>
            </div>
        )
    }
}
