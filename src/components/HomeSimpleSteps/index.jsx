import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { setUserStatus } from "../../actions";
import decoration from '../../assets/icons/Decoration.svg';
import shirt from '../../assets/icons/Icon-1.svg';
import bag from '../../assets/icons/Icon-2.svg';
import search from '../../assets/icons/Icon-3.svg';
import transport from '../../assets/icons/Icon-4.svg';
import './style.scss';

class HomeSimpleSteps extends Component {
	render() {
		return (
			<div id='simple-steps-container' className='simple-steps-container'>
				<h1 className='text-above-decoration'>Only 4 simple steps</h1>
				<img src={decoration} alt='' />
				<div className='simple-steps'>

					<div className='single-step'>
						<img className='single-step-icon' src={shirt} alt='' />
						<h3 className='single-step-header'>Choose items</h3>
						<hr className='single-step-line' />
						<span className='single-step-description'>clothing, toys, tools, etc.</span>
					</div>
					<div className='single-step'>
						<img className='single-step-icon' src={bag} alt='' />
						<h3 className='single-step-header'>Pack items</h3>
						<hr className='single-step-line' />
						<span className='single-step-description'>use trash bags or paper boxes</span>
					</div>
					<div className='single-step'>
						<img className='single-step-icon' src={search} alt='' />
						<h3 className='single-step-header'>Decide who you want to help</h3>
						<hr className='single-step-line' />
						<span className='single-step-description'>choose trusted place</span>
					</div>
					<div className='single-step'>
						<img className='single-step-icon' src={transport} alt='' />
						<h3 className='single-step-header'>Order pick up</h3>
						<hr className='single-step-line' />
						<span className='single-step-description'>courier comes whenever it suits you </span>
					</div>
				</div>
				<div className='give-away'>
					{this.props.authentication
						? <p><NavLink to="/donate">Give<br />away</NavLink></p>
						: <p><NavLink to="/login">Give<br />away</NavLink></p>
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authentication: state.authentication
	}
}

export default connect(mapStateToProps, { setUserStatus })(HomeSimpleSteps);
