import React, {Component} from "react";
import Select from "react-dropdown-select";
import './style.scss';

class DonateBags extends Component {

    render() {
        return (
            <>
                <div className='donate-bags-warning'>
                    <h1>Remember!</h1>
                    <span>All the items pack in 60l trash bags. More information how to pack the items you can find under the LINK.</span>
                </div>
                {/*<div className='donate-bags-choice-container'>*/}
                {/*    <span>Step 2/4</span>*/}
                {/*    <h1>How many bags do you want to donate?</h1>*/}
                {/*    <h3>Amount of the 60l bags:</h3>*/}
                {/*    <div className='donate-bags-choice'>*/}
                {/*        <Select options={options} dropdownPosition="auto" className='select'/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        );
    }
}

export default DonateBags;