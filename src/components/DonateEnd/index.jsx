import React, { Component} from "react";
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import './style.scss';
import {NavLink} from "react-router-dom";

class DonateEnd extends Component {
    render() {
        return (
            <div className='donate-component-container'>
                <div className='donate-end'>
                    <div className='donate-end-text'>
                        <span>Thank you for filling in the form!</span>
                        <span>We have sent an e-mail to you</span>
                        <span>with all information about the pick-up.</span>
                        <Decoration />
                        <NavLink to='/' className='donate-component-home-button'>Back to Home</NavLink>
                    </div>

                </div>
            </div>
        );
    }
}
export default DonateEnd;