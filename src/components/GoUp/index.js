import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { ReactComponent as IconUp } from '../../assets/icons/angle-double-up-solid.svg';

const GoUp = ({ to, name }) => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });

  return (
    <>
      {scrollY > 350
        && (
          <Link
            to={to}
            className={name}
          >
            <span>Up</span>
            <IconUp />
          </Link>
        )}
    </>
  );
};

GoUp.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default GoUp;
