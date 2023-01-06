import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/german shorthaired pointer'>GSP's</NavLink></li>
                <li><NavLink to='/golden retriever'>Golden's</NavLink></li>
                <li><NavLink to='/collie'>Collie Pups</NavLink></li>
            </ul>
        </nav>
    )

};

export default Nav;