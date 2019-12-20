import React from "react";

import SignInMain from "../../components/SignInMain"
import NavBar from "../../components/NavBar";
import './style.scss';

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
