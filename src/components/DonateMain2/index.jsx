import React, { Component} from "react";
import './style.scss';

import DonateHeader from "../DonateHeader";
import DonateItems from "../DonateItems";
import DonateBags from "../DonateBags";
import DonateLocation from "../DonateLocation";
import DonatePickUp from "../DonatePickUp";
import DonateSumUp from "../DonateSumUp";

import Contact from "../Contact";
import Footer from "../Footer";

class DonateMain extends Component {
    state = {
        active: 1,
        forward:'Next',
        backwards: 'Back'
    };

    handleClickForwards = () => {
        this.setState({active: this.state.active +1})
    };

    handleClickBackwards = () => {
        this.setState({active: this.state.active -1})
    };

    render() {
        const {active, backwards, forward} = this.state;
        return (
                <div id='donate-container'>
                    <DonateHeader />
                    <div id='donate-steps-container'>
                        <div className='donate-components'>
                            { active === 1 && <DonateItems />}
                            { active === 2 && <DonateBags />}
                            { active === 3 && <DonateLocation />}
                            { active === 4 && <DonatePickUp />}
                            { active === 5 && <DonateSumUp />}
                        </div>
                        <div className='donate-button-container'>
                            <button
                                type="button"
                                className={(active === 1 || active === 6 ) ? 'button-display-none' : 'button-backward-visible'}
                                onClick={this.handleClickBackwards}>
                                {backwards}
                            </button>
                            <button
                                type="button"
                                className={active === 6  ? 'button-display-none' : 'button-forward-visible'}
                                onClick={this.handleClickForwards}>
                                { active === 5 ? 'Confirm': forward}
                            </button>
                        </div>
                    </div>
                    <Contact/>
                    <div className='footer-wrapper'>
                        <Footer/>
                    </div>
                </div>
        )

    }
}
export default DonateMain;