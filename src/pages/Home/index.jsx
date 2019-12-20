import React from "react";

import HomeHeader from "../../components/HomeHeader"
import HomeThreeColumns from "../../components/HomeThreeColumns"
import HomeSimpleSteps from "../../components/HomeSimpleSteps"
import HomeAbout from "../../components/HomeAbout"
import HomeSupport from "../../components/HomeSupport"
import HomeContact from "../../components/Contact";
import Footer from "../../components/Footer";
import HomeUp from "../../components/HomeUp"
import './style.scss';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <HomeHeader />
            <div className='home-explanation-wrapper'>
                <HomeThreeColumns />
                <HomeSimpleSteps />
            </div>
            <HomeAbout />
            <HomeSupport />
            <HomeContact />
            <div className='footer-wrapper'>
                <Footer />
            </div>
            <HomeUp />
        </div>
    )
};

export default Home;
