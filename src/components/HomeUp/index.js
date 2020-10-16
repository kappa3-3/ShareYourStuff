import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { ReactComponent as Up } from '../../assets/icons/angle-double-up-solid.svg';
import './style.scss';

export default function HomeUp({ scrollY }) {
  return (
    <>
      {scrollY > 350
        && (
          <Link
            to="header-container"
            className="home-up-container"
          >
            <span>Up</span>
            <Up />
          </Link>
        )}
    </>
  );
}

HomeUp.propTypes = {
  scrollY: PropTypes.number.isRequired,
};
