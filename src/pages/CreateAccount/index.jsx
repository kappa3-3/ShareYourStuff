import React from "react";
import './style.scss';

import CreateAccountMain from "../../components/CreateAccountMain"
import NavBar from "../../components/NavBar";


const CreateAccount = () => {
    return (
        <div>
            <div className='nav-bar-container'>
                <NavBar />
            </div>
            <CreateAccountMain />
        </div>
    )
};

export default CreateAccount;
