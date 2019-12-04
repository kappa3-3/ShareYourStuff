import React from "react";
import './style.scss';

import HomeHeader from "../HomeHeader"
import HomeThreeColumns from "../HomeThreeColumns"
import HomeSimpleSteps from "../HomeSimpleSteps"
import HomeAbout from "../HomeAbout"
import HomeContact from "../HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeContact />
        </>
    )
};

export default Home;
