import React from 'react';
import logo from '../image/code-svgrepo-com.svg';
import login from '../image/login-svgrepo-com.svg';

export default function Header() {
    return (
        <header id='Header'>
            <div className="container">

            
            <div className="header-main">
                <div className="logo">
                    <a href="#">AzarDev</a><img src={logo} alt="azardev" />
                </div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                    </ul>
                </nav>
                <div className="login">
                        <a href="#">login <img src={ login } alt='login'/></a>
                </div>
                </div>
            </div>
        </header>
    )
}
