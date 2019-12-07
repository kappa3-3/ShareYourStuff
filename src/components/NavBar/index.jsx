import React, {Component} from "react";
import './style.scss';
import {NavLink} from "react-router-dom";
import {navigationData} from "../../commons/navigationData";
import {Link} from "react-scroll";

export const NavBar = () => {
    return (
    <div className='header-nav'>
        <div className='header-nav-account'>
            <NavLink to="/login" className='header-nav-account-link'>Sign In</NavLink>
            <NavLink to="/register" className='header-nav-account-link'>Create Account</NavLink>
        </div>
        <ul className='header-nav-sub-pages'>
            <li>
                <NavLink to="/" className='header-nav-sub-pages-link'>Start</NavLink>
            </li>
            {navigationData.map(item => (
                <li>
                    <Link to={item.to} className='header-nav-sub-pages-link'>{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
    )
};

