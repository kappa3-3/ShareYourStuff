import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

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
                            <Link to={'header-container'} className='header-nav-sub-pages-link'>Start</Link>
                            <Link to={'three-columns-container'} className='header-nav-sub-pages-link'>Idea</Link>
                            <Link to={'about-container'} className='header-nav-sub-pages-link'>About us</Link>
                            <Link to={'support-container'} className='header-nav-sub-pages-link'>Support</Link>
                            <Link to={'contact-container'} className='header-nav-sub-pages-link'>Contact</Link>
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