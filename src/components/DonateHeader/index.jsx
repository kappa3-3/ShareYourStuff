import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import { NavBar } from '../NavBar'
import {Link} from "react-scroll";

class DonateHeader extends Component {
    render() {
        return (
            <div id='donate-header-container'>
                <div className='donate-header-img' />
                <div className='donate-header-content'>
                    <NavBar />
                    <div className='donate-header-guide'>
                        <h1>
                            <Link to='donate-steps-container' >
                                Donate items you don't need anymore
                            </Link>

                        </h1>
                        <Decoration />
                        <h2>Only 4 simple steps:</h2>
                        <div className='donate-guide-steps'>
                            <div className='donate-step-wrapper'>
                                <span>Choose items</span>
                            </div>
                            <div className='donate-step-wrapper'>
                                <span>Put them in a bag</span>
                            </div>
                            <div className='donate-step-wrapper'>
                                <span>Choose organization</span>
                            </div>
                            <div className='donate-step-wrapper'>
                                <span>Schedule a courier</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DonateHeader;

