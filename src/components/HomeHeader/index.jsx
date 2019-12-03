import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
class HomeHeader extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-img' />
                <div className='header-content'>
                    <div className='header-nav'>
                        <ul className='header-nav-account'>
                            <li><a> Sign In </a></li>
                            <li><a>Create Account</a></li>
                        </ul>
                        <ul className='header-nav-sub-pages'>
                            <li><a>Start</a></li>
                            <li><a>Idea</a></li>
                            <li><a>About us</a></li>
                            <li><a>Support</a></li>
                            <li><a>Contact</a></li>
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