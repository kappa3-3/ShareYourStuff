import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserStatus } from '../../actions';
import decoration from '../../assets/icons/Decoration.svg';
import shirt from '../../assets/icons/Icon-1.svg';
import bag from '../../assets/icons/Icon-2.svg';
import search from '../../assets/icons/Icon-3.svg';
import transport from '../../assets/icons/Icon-4.svg';
import './style.scss';

function HomeSimpleSteps({ authentication }) {
  const content = [
    {
      id: 'category',
      title: 'Choose items',
      src: shirt,
      desc: 'clothing, toys, tools, etc.',
    },
    {
      id: 'containers',
      title: 'Pack bags',
      src: bag,
      desc: 'use trash bags or paper boxes',
    },
    {
      id: 'places',
      title: 'Select organization',
      src: search,
      desc: 'choose only trusted places',
    },
    {
      id: 'transportation',
      title: 'Order pick up',
      src: transport,
      desc: 'courier comes whenever it suits you',
    },

  ];
  return (
    <div
      id="simple-steps-container"
      className="simple-steps-container"
    >
      <h1 className="text-above-decoration">
        Only 4 simple steps
      </h1>
      <img src={decoration} alt="" />
      <div className="simple-steps">
        {content.map(({
          id, src, desc, title,
        }) => (
          <div className="single-step" key={id}>
            <img
              className="single-step-icon"
              src={src}
              alt=""
            />
            <h3 className="single-step-header">{title}</h3>
            <hr className="single-step-line" />
            <span className="single-step-description">
              {desc}
            </span>
          </div>
        ))}
      </div>
      <div className="give-away">
        {authentication
          ? (
            <p>
              <NavLink to="/donate">
                Give
                <br />
                away
              </NavLink>
            </p>
          ) : (
            <p>
              <NavLink to="/login">
                Give
                <br />
                away
              </NavLink>
            </p>
          )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
  };
}

HomeSimpleSteps.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { setUserStatus })(HomeSimpleSteps);
