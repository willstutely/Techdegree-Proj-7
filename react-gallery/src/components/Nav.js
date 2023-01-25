import React from 'react';
import { NavLink } from 'react-router-dom';

// Nav component uses NavLink to set up Nav buttons
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/german shorthaired pointer'>GSP's</NavLink></li>
                <li><NavLink to='/golden retriever'>Golden's</NavLink></li>
                <li><NavLink to='/collie puppy'>Collie Pups</NavLink></li>
            </ul>
        </nav>
    )

};

export default Nav;