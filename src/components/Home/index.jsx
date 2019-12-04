import React from "react";
import './style.scss';

import HomeHeader from "../HomeHeader"
import HomeThreeColumns from "../HomeThreeColumns"
import HomeSimpleSteps from "../HomeSimpleSteps"
import HomeAbout from "../HomeAbout"
import HomeContact from "../HomeContact";
import HomeFooter from "../HomeFooter";

const Home = () => {
    return (
        <div className='home-wrapper'>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeContact />
            <div className='footer-wrapper'>
                <HomeFooter />
            </div>
        </div>
    )
};

export default Home;
