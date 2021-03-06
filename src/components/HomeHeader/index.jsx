import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import './style.scss';

function HomeHeader({ authentication }) {
  return (
    <div id="header-container" className="header-container">
      <div className="header-img" />
      <div className="header-content">
        <NavBar page="home-page" />
        <div className="header-guide">
          <h1 className="text-above-decoration">
            Start helping!
            <br />
            Give away your unneeded possessions in good hands
          </h1>
          <Decoration />
          <div className="header-guide-options">
            <p>
              {authentication
                ? (
                  <NavLink to="/donate">
                    Give
                    <br />
                    away
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    Give
                    <br />
                    away
                  </NavLink>
                )}
            </p>
            <p>
              {authentication
                ? <NavLink to="/donate">Organize a charity drive</NavLink>
                : <NavLink to="/login">Organize a charity drive</NavLink>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

HomeHeader.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomeHeader);
