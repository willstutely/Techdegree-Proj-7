import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/gsp'>GSP's</NavLink></li>
                <li><NavLink to='/goldens'>Golden's</NavLink></li>
                <li><NavLink to='/collies'>Collie Pups</NavLink></li>
            </ul>
        </nav>
    )

};

export default Nav;