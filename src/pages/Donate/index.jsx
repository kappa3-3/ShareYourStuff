import React from "react";
import './style.scss';
import DonateMain from "../../components/DonateMain";
import DonateUp from "../../components/DonateUp";

export const Donate = () => {
    return (
        <div className='donate-wrapper'>
            <DonateMain />
            <DonateUp />
        </div>
    )
};


