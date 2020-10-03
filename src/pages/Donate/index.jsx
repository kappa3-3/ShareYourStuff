import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DonateMain from '../../components/DonateMain';
import DonateUp from '../../components/DonateUp';
import NavBar from '../../components/NavBar';
import SignInMain from '../../components/SignInMain';
import { setUserStatus } from '../../actions';

function Donate({ authentication }) {
  return (
    authentication
      ? (
        <div className="donate-wrapper">
          <DonateMain />
          <DonateUp />
        </div>
      ) : (
        <div>
          <div className="nav-bar-container">
            <NavBar />
          </div>
          <SignInMain />
        </div>
      )
  );
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

Donate.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { setUserStatus })(Donate);
