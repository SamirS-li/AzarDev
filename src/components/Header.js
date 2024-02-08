import React, {useRef} from 'react';
import logo from '../image/code-svgrepo-com.svg';
import login from '../image/login-svgrepo-com.svg';
import { NavLink } from "react-router-dom"

export default function Header() {
    const headerClass = useRef('')


    const sideBar = (e) => {
        if (headerClass.current.className === 'active-m' && e.target.className !== 'mobile') {
            headerClass.current.className = '';
            console.log(e.target.className)

            
        } else if (headerClass.current.className === '' && e.target.className === 'mobile-bar') {
            headerClass.current.className = 'active-m';
            console.log('ssss')
            console.log(e.target)

        }
        
        // console.log(headerClass.current.className='test')
        // console.log('ss',headerClass.current.className)
    }

    return (
        <header id='Header' ref={headerClass} onClick={sideBar}>
            <div className="container">


                <div className="header-main">
                    <div className="logo">
                        <NavLink to="/" className='link'>AzarDev</NavLink><img src={logo} alt="azardev" />
                    </div>
                    <div className="mobile">
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
                            <NavLink to="/login" className='link'>login <img src={login} alt='login' /></NavLink>
                        </div>
                    </div>
                    <div className='mobile-bar'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}
