import React, {Component} from "react";
import './style.scss';
import decoration from '../../assets/icons/Decoration.svg';
import shirt from '../../assets/icons/Icon-1.svg';
import bag from '../../assets/icons/Icon-2.svg';
import search from '../../assets/icons/Icon-3.svg';
import transport from '../../assets/icons/Icon-4.svg';
import {NavLink} from "react-router-dom";

class HomeSimpleSteps extends Component {
    render() {
        return (
            <div id='simple-steps-container'>
                <h1>Only 4 simple steps</h1>
                <img src={decoration} />
                <div className='simple-steps'>

                        <div className='single-step'>
                            <img src={shirt} />
                            <h3>Choose items</h3>
                            <hr />
                            <h4>clothing, toys, tools, etc.</h4>
                        </div>
                        <div className='single-step'>
                            <img src={bag} />
                            <h3>Pack items</h3>
                            <hr />
                            <h4>use trash bags or paper boxes</h4>
                        </div>
                        <div className='single-step'>
                            <img src={search} />
                            <h3>Decide who you want to help</h3>
                            <hr />
                            <h4>choose trusted place</h4>
                        </div>
                        <div className='single-step'>
                            <img src={transport} />
                            <h3>Order pick up</h3>
                            <hr />
                            <h4>courier comes whenever it suits you </h4>
                        </div>
                </div>
                <div className='give-away'>
                    <p><NavLink to="/login">Give<br />away</NavLink></p>
                </div>
            </div>
        );
    }
}
export default HomeSimpleSteps;