import React from 'react';
import './inborderpage.css'
import Login from './login';
import Header from './header';
import Logo from './logo';

const InBorderPage = () => {
    return (
        <div className="container">
            <div className='background-gradient'></div>
            <div className="content">
                <div className="left-content">
                <Login />
                </div>
                <div className="right-content">
                    <Header />
                    <Logo />
                </div>
            </div>
        </div>
    );
}

export default InBorderPage;
