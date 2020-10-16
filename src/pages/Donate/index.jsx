import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import DonateHeader from '../../components/DonateHeader';
import DonateMain from '../../components/DonateMain';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import GoUp from '../../components/GoUp';
import './style.scss';

const Donate = ({ authentication }) => (
  authentication
    ? (
      <div id="donate-container" className="donate-container">
        <DonateHeader />
        <DonateMain />
        <Contact />
        <Footer />
        <GoUp
          to="donate-container"
          name="donate-up-container"
        />
      </div>
    ) : <Redirect to="login" />
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
