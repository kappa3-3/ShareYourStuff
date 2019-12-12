import React, {Component} from "react";
import './style.scss';
import {NavLink, withRouter} from "react-router-dom";
import {navigationData} from "../../commons/navigationData";
import {Link} from "react-scroll";
import { connect } from "react-redux";
import { setUserStatus } from "../../actions/index";

class NavBar extends Component {

    handleLogOut = e => {
        e.preventDefault();
        // this.authentication = false;
        this.props.setUserStatus(false, false);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='header-nav'>
                <div className='header-nav-account'>
                    {this.props.authentication &&  <span>Welcome!</span>}
                    {this.props.authentication
                        ? <NavLink to="/" className='header-nav-account-link' onClick={this.handleLogOut}>Sign Out</NavLink>
                        : <NavLink to="/login" className='header-nav-account-link'>Sign In</NavLink> }
                    <NavLink to="/register" className='header-nav-account-link'>Create Account</NavLink>
                </div>
                <ul className='header-nav-sub-pages'>
                    <li>
                        <NavLink to="/" className='header-nav-sub-pages-link'>Start</NavLink>
                    </li>
                    {navigationData.map(item => (
                        <li>
                            <Link to={item.to} className='header-nav-sub-pages-link'>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

export default withRouter(connect(mapStateToProps, { setUserStatus })(NavBar));