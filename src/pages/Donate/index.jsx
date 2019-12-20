import React, { Component }from "react";
import {connect} from "react-redux";

import DonateMain from "../../components/DonateMain";
import DonateUp from "../../components/DonateUp";
import NavBar from "../../components/NavBar";
import SignInMain from "../../components/SignInMain";
import {setUserStatus} from "../../actions";

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

