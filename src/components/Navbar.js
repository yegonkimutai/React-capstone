import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navigation = () => {
    const location = useLocation()
    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        }
    ]

    return (
        <nav>
            <div className="main-nav">
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink to={link.path} style={{ color: 'white', textDecoration: 'none'}}>
                                {location.pathname === '/' ? 'HOME' : '◀︎ Back'}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation