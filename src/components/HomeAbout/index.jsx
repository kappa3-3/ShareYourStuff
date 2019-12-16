import React, {Component} from "react";
import './style.scss';
import decoration from '../../assets/icons/Decoration.svg';
import signature from '../../assets/icons/Signature.svg';

class HomeAbout extends Component {
    render() {
        return (
            <div id='about-container'>
                <div className='about-info'>
                    <h1>About Us</h1>
                    <img src={decoration} alt=''/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsam iste, minus omnis porro quidem repellendus sequi similique suscipit. A aliquam architecto culpa enim facilis id libero, non odio possimus quas qui tempore ut veritatis. </p>
                    <img src={ signature } alt='We have signed it' className='about-signage' />
                </div>
                <div className='about-img' />
            </div>
        );
    }
}
export default HomeAbout;

