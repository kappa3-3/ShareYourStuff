import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DonateMain from '../../components/DonateMain';
import DonateUp from '../../components/DonateUp';
import NavBar from '../../components/NavBar';
import SignInMain from '../../components/SignInMain';
import './style.scss';

const Donate = ({ authentication }) => (
  authentication
    ? (
      <div>
        <DonateMain />
        <DonateUp />
      </div>
    ) : (
      <div>
        <div className="nav-bar-container">
          <NavBar page="donate" />
        </div>
        <SignInMain />
      </div>
    )
);

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

Donate.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Donate);
