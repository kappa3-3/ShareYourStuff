import React, {Component} from "react";
import './style.scss';
import {NavLink, withRouter} from "react-router-dom";
import {ReactComponent as Decoration} from '../../assets/icons/Decoration.svg';
import NavBar from "../../components/NavBar";
import {connect} from "react-redux";
import {setUserStatus} from "../../actions";

class HomeHeader extends Component {

    render() {
        return (
            <div id='header-container'>
                <div className='header-img'/>
                <div className='header-content'>
                    <NavBar page='home-page'/>
                    <div className='header-guide'>
                        <h1>Start helping!
                            <br/>Give away your unneeded possessions in good hands
                        </h1>
                        <Decoration/>
                        <div className='header-guide-options'>
                            <p>
                                {this.props.authentication === true
                                    ? <NavLink to="/donate">Give<br/>away</NavLink>
                                    : <NavLink to="/login">Give<br/>away</NavLink>
                                }
                            </p>
                            <p><NavLink to="/login">Organize a charity drive</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default connect(mapStateToProps, {setUserStatus})(HomeHeader);
