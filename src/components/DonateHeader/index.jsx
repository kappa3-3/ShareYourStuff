import React from 'react';
import { Link } from 'react-scroll';
import NavBar from '../NavBar';
import { ReactComponent as Decoration } from '../../assets/icons/Decoration.svg';
import './style.scss';

export default function Component() {
  const steps = ['Choose items', 'Put them in a bag', 'Choose organization', 'Schedule a courier'];
  return (
    <div id="donate-header-container" className="donate-header-container">
      <div className="donate-header-img" />
      <div className="donate-header-content">
        <NavBar page="donate-page" />
        <div className="donate-header-guide">
          <h1 className="donate-header-guide-headline">
            <Link
              to="donate-steps-container"
              className="donate-header-guide-link"
            >
              Donate items you don&apos;t need anymore
            </Link>
          </h1>
          <Decoration />
          <h2 className="donate-header-guide-headline-thin">
            Only 4 simple steps:
          </h2>
          <div className="donate-guide-steps">
            {steps.map(step => (
              <div className="donate-step-wrapper" key={step}>
                <span className="donate-step">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
