import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import HomeThreeColumns from '../../components/HomeThreeColumns';
import HomeSimpleSteps from '../../components/HomeSimpleSteps';
import HomeAbout from '../../components/HomeAbout';
import HomeSupport from '../../components/HomeSupport';
import HomeContact from '../../components/Contact';
import GoUp from '../../components/GoUp';
import Footer from '../../components/Footer';
import './style.scss';

const Home = () => (
  <div className="home-wrapper">
    <HomeHeader />
    <div className="home-explanation-wrapper">
      <HomeThreeColumns />
      <HomeSimpleSteps />
    </div>
    <HomeAbout />
    <HomeSupport />
    <HomeContact />
    <Footer />
    <GoUp
      to="header-container"
      name="home-up-container"
    />
  </div>
);

export default Home;
