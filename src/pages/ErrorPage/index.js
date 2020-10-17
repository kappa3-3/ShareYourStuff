import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import './style.scss';

const ErrorPage = ({ authentication }) => (
  <div className="error-wrapper">
    <div id="error-container" className="error-container">
      <div className="header-content">
        <NavBar page="home-page" />
      </div>
      <div className="error-guide">
        <h1 className="text-above-decoration">
          Oooeps!
        </h1>
        <p>Something went wrong on our side...</p>
        <Decoration />
        <div className="error-guide-options">
          <p>
            {authentication
              ? (
                <NavLink to="/donate">
                  Try
                  <br />
                  again
                </NavLink>
              ) : (
                <NavLink to="/login">
                  Log
                  <br />
                  in
                </NavLink>
              )}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

ErrorPage.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ErrorPage);
