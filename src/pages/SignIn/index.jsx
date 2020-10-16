import React from 'react';
import SignInMain from '../../components/SignInMain';
import NavBar from '../../components/NavBar';
import './style.scss';

export default function SignIn() {
  return (
    <div>
      <div className="nav-bar-container">
        <NavBar page="sign-in" />
      </div>
      <SignInMain />
    </div>
  );
}
