import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import { Link } from 'react-router-dom';
class HomeHeader extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-img' />
                <div className='header-content'>
                    <div className='header-nav'>
                        <div className='header-nav-account'>
                            <Link to="/signIn" className='header-nav-account-link'>Sign In</Link>
                            <Link to="/signIn" className='header-nav-account-link'>Create Account</Link>
                        </div>
                        <ul className='header-nav-sub-pages'>
                            <Link to={'HomeHeader'} className='header-nav-sub-pages-link'>Start</Link>
                            <Link to={'HomeThreeColumns'} className='header-nav-sub-pages-link'>Idea</Link>
                            <Link to={'HomeAbout'} className='header-nav-sub-pages-link'>About us</Link>
                            <Link to={'HomeSupport'} className='header-nav-sub-pages-link'>Support</Link>
                            <Link to={'HomeContact'} className='header-nav-sub-pages-link'>Contact</Link>
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