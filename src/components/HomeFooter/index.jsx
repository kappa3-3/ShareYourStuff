import React, {Component} from "react";
import './style.scss';
import instagram from '../../assets/icons/Instagram.svg'
import facebook from '../../assets/icons/Facebook.svg'

class HomeFooter extends Component {
    render() {
        return (
            <div id='footer-container'>
                <span>Copyright by Coders Lab</span>
                <img src={ facebook } alt='facebook' />
                <img src={ instagram } alt='instagram' />
            </div>
        );
    }
}
export default HomeFooter;