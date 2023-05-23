import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

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
            <div>
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink to={link.path}>
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