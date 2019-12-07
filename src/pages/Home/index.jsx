import React from "react";
import './style.scss';

import HomeHeader from "../../components/HomeHeader"
import HomeThreeColumns from "../../components/HomeThreeColumns"
import HomeSimpleSteps from "../../components/HomeSimpleSteps"
import HomeAbout from "../../components/HomeAbout"
import HomeSupport from "../../components/HomeSupport"
import HomeContact from "../../components/HomeContact";
import HomeFooter from "../../components/HomeFooter";

const Home = () => {
    return (
        <div className='home-wrapper'>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeSupport />
            <HomeContact />
            <div className='footer-wrapper'>
                <HomeFooter />
            </div>
        </div>
    )
};

export default Home;
