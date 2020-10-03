import React from 'react';
import CreateAccountMain from '../../components/CreateAccountMain';
import NavBar from '../../components/NavBar';
import './style.scss';

const CreateAccount = () => (
  <div>
    <div className="nav-bar-container">
      <NavBar />
    </div>
    <CreateAccountMain />
  </div>
);

export default CreateAccount;
