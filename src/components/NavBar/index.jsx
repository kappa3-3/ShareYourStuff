import React, {Component} from "react";
import './style.scss';
import {NavLink, withRouter} from "react-router-dom";
import {navigationDataHome} from "../../commons/navigationDataHome";
import {Link} from "react-scroll";
// import {ScrollTo} from "react-scroll-to";
import {connect} from "react-redux";
import {setUserStatus} from "../../actions/index";
import decoration from "../../assets/icons/Decoration.svg";

class NavBar extends Component {

    state = {
        logOutPrompt: false
    };

    handleLogOut = e => {
        e.preventDefault();
        this.setState({logOutPrompt: true});
        this.props.setUserStatus();
        setTimeout(() => this.props.history.push('/'), 2000);
    };

    handleHomeLink = e => {
        e.preventDefault();
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
                    </div>
                    <ul className='header-nav-sub-pages'>
                        {(this.props.page === 'home-page' || this.props.page === 'donate-page')
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
                        {this.props.page === 'donate-page' && navigationDataHome.map(item => (
                            <li key={item.title}>
                                <Link
                                    onClick={this.handleHomeLink}
                                    to={item.to}
                                    className='header-nav-sub-pages-link'>{item.title}
                                </Link>
                            </li>
                        ))}
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