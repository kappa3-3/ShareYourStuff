import React, {Component} from "react";
import './style.scss';
import decoration from '../../assets/icons/Decoration.svg';
import Form from '../HomeForm'


class HomeContact extends Component {
    render() {
        return (
            <div id='contact-container'>
                <div className='contact-img' />
                <div className='contact-form'>
                    <h1>Contact Us</h1>
                    <img src={decoration} />
                    <Form />
                </div>
            </div>
        );
    }
}
export default HomeContact;

