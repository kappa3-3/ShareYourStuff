import React from "react";
import './style.scss';

import HomeHeader from "../../components/HomeHeader"
import HomeThreeColumns from "../../components/HomeThreeColumns"
import HomeSimpleSteps from "../../components/HomeSimpleSteps"
import HomeAbout from "../../components/HomeAbout"
import HomeSupport from "../../components/HomeSupport"
import HomeContact from "../../components/Contact";
import HomeUp from "../../components/HomeUp"
import Footer from "../../components/Footer";

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
                <Footer />
            </div>
            <HomeUp />
        </div>
    )
};

export default Home;
