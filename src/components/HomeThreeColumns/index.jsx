import React from 'react';
import './style.scss';

export default function HomeThreeColumns() {
  return (
    <div
      id="three-columns-container"
      className="three-columns-container"
    >
      <div className="three-columns">
        <h1 className="three-columns-header">10</h1>
        <h3 className="three-columns-sub-header">Given away bags</h3>
        <p className="three-columns-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet animi debitis distinctio eaque, et numquam.
        </p>
      </div>
      <div className="three-columns">
        <h1 className="three-columns-header">5</h1>
        <h3 className="three-columns-sub-header">Supported organizations</h3>
        <p className="three-columns-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet animi debitis distinctio eaque, et numquam.
        </p>
      </div>
      <div className="three-columns">
        <h1 className="three-columns-header">7</h1>
        <h3 className="three-columns-sub-header">Organized drives</h3>
        <p className="three-columns-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Amet animi debitis distinctio eaque, et numquam.
        </p>
      </div>
    </div>
  );
}
