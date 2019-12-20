import React from "react";

import instagram from '../../assets/icons/Instagram.svg'
import facebook from '../../assets/icons/Facebook.svg'
import './style.scss';

export default function HomeFooter() {
    return (
        <div id='footer-container'>
            <span>Copyright by Coders Lab</span>
            <img src={facebook} alt='facebook'/>
            <img src={instagram} alt='instagram'/>
        </div>
    );
}

