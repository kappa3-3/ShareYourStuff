import React from 'react';
import decoration from '../../assets/icons/Decoration.svg';

const SignedInPrompt = () => (
  <div className="header-logout-container">
    <div className="header-logout-prompt">
      <h1>The account have been created successfully</h1>
      <img src={decoration} alt="/////////" />
      <h4>You are have been automatically signed in</h4>
    </div>
  </div>
);

export default SignedInPrompt;
