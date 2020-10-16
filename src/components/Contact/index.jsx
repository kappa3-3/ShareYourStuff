import React from 'react';
import Form from '../HomeForm';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

const HomeContact = () => (
  <div
    id="contact-container"
    className="contact-container"
  >
    <div className="contact-img" />
    <div className="contact-form">
      <h1 className="contact-form-headline">
        Contact Us
      </h1>
      <img
        src={decoration}
        alt=""
      />
      <Form />
    </div>
  </div>
);

export default HomeContact;
