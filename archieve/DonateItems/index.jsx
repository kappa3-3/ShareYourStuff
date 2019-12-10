import React, {Component} from "react";
import './style.scss';

class DonateItems extends Component {
    render() {
        return (
                <>
                    <div className='donate-items-warning'>
                        <h1>Remember!</h1>
                        <span>Fill in all the details about your package. It will let us know who should we support.</span>
                    </div>
                </>

        );
    }
}

export default DonateItems;