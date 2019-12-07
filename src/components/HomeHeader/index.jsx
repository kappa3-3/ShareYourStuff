import React, {Component} from "react";
import './style.scss';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import { NavBar } from '../NavBar'

class HomeHeader extends Component {
    render() {
        return (
            <div id='header-container'>
                <div className='header-img' />
                <div className='header-content'>
                    <NavBar />
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

