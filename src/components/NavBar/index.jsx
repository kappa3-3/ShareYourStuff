import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {Link} from "react-scroll";
import {connect} from "react-redux";

import {navigationDataHome} from "../../commons/navigationDataHome";
import {setUserStatus} from "../../actions/index";
import decoration from "../../assets/icons/Decoration.svg";
import './style.scss';

class NavBar extends Component {

    state = {
        logOutPrompt: false,
        redirectToHome: false
    };

    handleLogOut = e => {
        e.preventDefault();
        this.setState({logOutPrompt: true});
        this.props.setUserStatus();
        setTimeout(() => this.setState({logOutPrompt: false}), 2000);
        this.props.history.push('/');

    };

    render() {

        return (
            <>
                {this.state.logOutPrompt &&
                <div className='header-logout-container'>
                    <div className='header-logout-prompt'>
                        <h1>You have been logged out successfully!</h1>
                        <img src={decoration} alt='/////////'/>
                        <h4>you are being redirected to HOME page</h4>
                    </div>
                </div>}
                <div className='header-nav'>
                    <div className='header-nav-account'>
                        {this.props.authentication && <span>You are logged in</span>}
                        {this.props.authentication
                            ? <NavLink to="/" className='header-nav-account-link' onClick={this.handleLogOut}>Sign
                                Out</NavLink>
                            : <NavLink to="/login" className='header-nav-account-link'>Sign In</NavLink>}
                        {!this.props.authentication
                        && <NavLink to="/register" className='header-nav-account-link'>Create Account</NavLink>}
                        {this.props.page === 'donate-page'
                        && <NavLink to="/" className='header-nav-account-link'>Home</NavLink>}
                        {(this.props.page === 'home-page' && this.props.authentication)
                        && <NavLink to="/donate" className='header-nav-account-link'>Donate</NavLink>}
                    </div>
                    <ul className='header-nav-sub-pages'>
                        {(this.props.page === 'home-page')
                        && <li>
                            <NavLink to="/" className='header-nav-sub-pages-link'>Start</NavLink>
                        </li>
                        }
                        {this.props.page === 'home-page' && navigationDataHome.map(item => (
                            <li key={item.title}>
                                <Link
                                    to={item.to}
                                    className='header-nav-sub-pages-link'>{item.title}</Link>
                            </li>
                        ))}
                        {this.props.page === 'donate-page' &&
                        <>
                            <li>
                                <Link to='contact-container' className='header-nav-sub-pages-link'>Contact</Link>
                            </li>
                            <li>
                                <Link to='donate-steps-container' className='header-nav-sub-pages-link'>Donate</Link>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </>
        )
    }

}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default withRouter(connect(mapStateToProps, {setUserStatus})(NavBar));