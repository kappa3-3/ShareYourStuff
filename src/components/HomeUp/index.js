import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Up } from '../../assets/icons/angle-double-up-solid.svg';
import './style.scss';

export default function HomeUp() {
  const [visible, setVisible] = useState(false);
  const yPosition = () => {
    if (window.scrollY >= 500) {
      if (!visible) setVisible({ visible: true });
    } else {
      setVisible({ visible: false });
    }
  };
  window.addEventListener('scroll', yPosition);
  return (
    <>
      {visible
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
