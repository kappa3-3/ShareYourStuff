import React, { Component }from "react";
import './style.scss';
import DonateMain from "../../components/DonateMain";
import DonateUp from "../../components/DonateUp";
import {connect} from "react-redux";
import {setUserStatus} from "../../actions";
import NavBar from "../../components/NavBar";
import SignInMain from "../../components/SignInMain";

class Donate extends Component {
    render() {
        return (
            this.props.authentication
                ?
                <div className='donate-wrapper'>
                    <DonateMain/>
                    <DonateUp/>
                </div>
                :
                <div>
                    <div className='nav-bar-container'>
                        <NavBar />
                    </div>
                    <SignInMain />
                </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default connect(mapStateToProps, {setUserStatus})(Donate);

