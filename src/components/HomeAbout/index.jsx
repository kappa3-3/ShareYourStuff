import React, { Component } from "react";

import decoration from '../../assets/icons/Decoration.svg';
import signature from '../../assets/icons/Signature.svg';
import './style.scss';

class HomeAbout extends Component {
  HomeAboutRef = React.createRef();

  render() {
    return (
      <div
        className='about-container'
        id='about-container'
        ref={this.HomeAboutRef}>
        <div className='about-info'>
          <h1 className='text-above-decoration'>About Us</h1>
          <img src={decoration} alt='' />
          <p className='about-info-description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsam iste, minus omnis porro
          quidem repellendus sequi similique suscipit. A aliquam architecto culpa enim facilis id libero,
                        non odio possimus quas qui tempore ut veritatis. </p>
          <img src={signature} alt='We have signed it' className='about-signage' />
        </div>
        <div className='about-img' />
      </div>
    );
  }
}

export default HomeAbout;

