import React from 'react';
import instagram from '../../assets/icons/Instagram.svg';
import facebook from '../../assets/icons/Facebook.svg';
import './style.scss';

const HomeFooter = () => (
  <div className="footer-wrapper">
    <div
      id="footer-container"
      className="footer-container"
    >
      <span className="footer-text">
        Copyright by Coders Lab
    </span>
      <img
        className="footer-icon-fb"
        src={facebook}
        alt="facebook"
      />
      <img
        className="footer-icon-inst"
        src={instagram}
        alt="instagram"
      />
    </div>
  </div>
);

export default HomeFooter;
