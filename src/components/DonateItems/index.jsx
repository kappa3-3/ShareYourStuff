import React, {Component} from "react";
import './style.scss';

class DonateItems extends Component {
    render() {
        return (
            <div className='donate-items-container'>
                <div className='donate-items-warning'>
                    <h1>Remember!</h1>
                    <span>Fill in all the details about your package. It will let us know who should we support.</span>
                </div>
                <div className='donate-items-choice-container'>
                    <span>Step 1/4</span>
                    <h1> Choose products you want to donate:</h1>
                    <tbody>
                    <tr className='donate-items-choice'>
                        <td><input type='checkbox' value='wear' name='wear'/> clothing still to wear</td>
                        <td><input type='checkbox' value='away' name='away'/> clothing to throw away</td>
                        <td><input type='checkbox' value='toys' name='toys'/> toys</td>
                        <td><input type='checkbox' value='books' name='books'/> books</td>
                        <td><input type='checkbox' value='other' name='other'/> other</td>
                    </tr>
                    </tbody>
                </div>
            </div>
        );
    }
}

export default DonateItems;