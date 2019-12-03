import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { navigationData } from "../../commons/navigationData"

class HomeHeader extends Component {
    render() {
        return (
            <div id='header-container'>
                <div className='header-img' />
                <div className='header-content'>
                    <div className='header-nav'>
                        <div className='header-nav-account'>
                            <NavLink to="/SignIn" className='header-nav-account-link'>Sign In</NavLink>
                            <NavLink to="/CreateAccount" className='header-nav-account-link'>Create Account</NavLink>
                        </div>
                        <ul className='header-nav-sub-pages'>
                            {navigationData.map(item => (
                                <li>
                                    <Link to={item.to} className='header-nav-sub-pages-link'>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='header-guide'>
                        <h1>Start helping!
                            <br />Give away your unneeded possessions in good hands
                        </h1>
                        <Decoration />
                        <div className='header-guide-options'>
                            <p><a>Give<br />away</a></p>
                            <p><a>Organize a charity drive</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader;

