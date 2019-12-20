import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import './style.scss';

export default function DonateEnd() {

        return (
            <div className='donate-component-container'>
                <div className='donate-end'>
                    <div className='donate-end-text'>
                        <span>Thank you for filling in the form!</span>
                        <span>We have sent an e-mail to you</span>
                        <span>with all information about the pick-up.</span>
                        <Decoration />
                        <Link to='/' className='donate-component-home-button'>Back to Home</Link>
                    </div>

                </div>
            </div>
        );
}
