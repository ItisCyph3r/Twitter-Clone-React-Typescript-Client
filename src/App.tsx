import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { Home } from './pages/homepage/home';
import { Login } from './pages/loginpage/loginpage';

function formatDate(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    const formDate = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();

    function formMonth(month: number){
        if (month === 1) return 'Jan'
        else if (month === 2) return 'Feb'
        else if (month === 3) return 'Mar'
        else if (month === 4) return 'Apr'
        else if (month === 5) return 'May'
        else if (month === 6) return 'Jun'
        else if (month === 7) return 'Jul'
        else if (month === 8) return 'Aug'
        else if (month === 9) return 'Sep'
        else if (month === 10) return 'Oct'
        else if (month === 11) return 'Nov'
        else if (month === 12) return 'Dec'
    }
    return (
        formDate + ' ' + formMonth((date.getMonth()+1)) + ' ' + date.getFullYear().toString().substr(2, 2)
    )
}
const a  = new Date()
console.log(a)
export default class App extends Component {
    render() {
        return (
            <div className='App'>
                {}
                {formatDate(a)}
                <Routes>
                    <Route path="/" element={ <Login/> } />
                    <Route path="/home" element={ <Home/> } />
                    {/* <Route path="contact" element={ <Contact/> } /> */}
                </Routes>
            </div>
        )
    }
}
