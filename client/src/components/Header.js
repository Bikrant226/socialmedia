import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

function Header() {


    return (
        <div className="header-wrapper">
            <span>facebook</span>
            <Link to="/home" className="link">Home</Link>
            <Link to="/home/post" className="link">Post</Link>
            <Link to='/home/logout' className="link">Logout</Link>
            <Link to='/register' className="link">Signup</Link>
        </div>
    )
}

export default Header
