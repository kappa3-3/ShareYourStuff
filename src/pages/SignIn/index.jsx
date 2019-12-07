import React from "react";
import './style.scss';

import SignInMain from "../../components/SignInMain"
import { NavBar } from "../../components/NavBar"

const SignIn = () => {
    return (
        <div>
            <div className='nav-bar-container'>
                <NavBar />
            </div>
            <SignInMain />
        </div>
    )
};

export default SignIn;
