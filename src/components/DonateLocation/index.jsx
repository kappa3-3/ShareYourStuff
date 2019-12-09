import React, {Component} from "react";
import './style.scss';
import Select from "react-select";

class DonateLocation extends Component {

    render() {
        return (
                <div className='donate-location-warning'>
                    <h1>Remember!</h1>
                    <span>You can type in specific organization you have in mind. You can also search for one in a dropdown menu.</span>
                </div>
        );
    }
}

export default DonateLocation;