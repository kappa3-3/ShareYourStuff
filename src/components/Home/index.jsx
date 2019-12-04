import HomeHeader from "../HomeHeader"
import HomeThreeColumns from "../HomeThreeColumns"
import HomeSimpleSteps from "../HomeSimpleSteps"
import HomeAbout from "../HomeAbout"
import React from "react";

import './style.scss';


const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
        </>

    )
};

export default Home;
