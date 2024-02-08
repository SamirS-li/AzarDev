import React from 'react';
import logo from '../image/code-svgrepo-com.svg';
import login from '../image/login-svgrepo-com.svg';
import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <header id='Header'>
            <div className="container">

            
            <div className="header-main">
                <div className="logo">
                    <NavLink to="/" className='link'>AzarDev</NavLink><img src={logo} alt="azardev" />
                </div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li>
                            <NavLink to="/" className='link'>home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='link'>about</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='link'>contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className='link'>blog</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="login">
                        <NavLink to="/login" className='link'>login <img src={ login } alt='login'/></NavLink>
                </div>
                </div>
            </div>
        </header>
    )
}
