import React, {Component} from "react";
import './style.scss';

class HomeThreeColumns extends Component {
    render() {
        return (
            <div id='three-columns-container'>
                <div className='three-columns'>
                    <h1>10</h1>
                    <h3>Given away bags</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis distinctio eaque, et numquam.</p>
                </div>
                <div className='three-columns'>
                    <h1>5</h1>
                    <h3>Supported organizations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis distinctio eaque, et numquam.</p>
                </div>
                <div className='three-columns'>
                    <h1>7</h1>
                    <h3>Organized drives</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi debitis distinctio eaque, et numquam.</p>
                </div>
            </div>
        );
    }
}
export default HomeThreeColumns;