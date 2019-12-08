import React, {Component} from "react";
import './style.scss';
import Select from "react-select";

class DonateLocation extends Component {

    render() {
        const options = [
            {value: 'poz', label: 'Poznań'},
            {value: 'waw', label: 'Warszawa'},
            {value: 'krk', label: 'Kraków'},
            {value: 'wro', label: 'Wrocław'},
            {value: 'kat', label: 'Katowice'}
        ];

        return (
            <div className='donate-location-container'>
                <div className='donate-location-warning'>
                    <h1>Remember!</h1>
                    <span>You can type in specific organization you have in mind. You can also search for one in a dropdown menu.</span>
                </div>
                <div className='donate-location-choice-container'>
                    <span>Step 3/4</span>
                    <h1>Location</h1>
                    <div className='donate-location-choice'>
                        <Select options={options} dropdownPosition="auto" className='select'/>
                    </div>
                    <h2>Who do you want to help?</h2>
                    <h2> Type in specific organization</h2>
                    <textarea placeholder='organization name' />
                </div>
            </div>
        );
    }
}

export default DonateLocation;