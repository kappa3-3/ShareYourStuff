import React, {Component} from "react"
import {Link} from "react-scroll";

import {ReactComponent as Up} from '../../assets/icons/angle-double-up-solid.svg';
import './style.scss';

class HomeUp extends Component {
    state= {
        visible: false
    };
    render() {
        const yPosition = () => {
            if (window.scrollY >= 500) {
                if (!this.state.visible)
                this.setState({visible: true})
            } else {
                if (this.state.visible)
                    this.setState({visible: false})
            }
        };
        window.addEventListener("scroll", yPosition);

        return (
            <>
                {this.state.visible &&
                <Link to='header-container' className='home-up-container'>
                    <span>Up</span>
                    <Up/>
                </Link>
                }
            </>
        )
    }
}
export default HomeUp;

