import React, { useState } from 'react';
import './style.scss';

function HomeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState('');
  const [isFormClicked, setIsFormClicked] = useState('');

  const isFormValid = () => setIsEmailValid({ isEmailValid: email.includes('@') });
  const onClickSubmit = e => {
    e.preventDefault();
    isFormValid();
    if (isEmailValid) {
      fetch('http://localhost:3006/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
        .catch(err => {
          throw (err);
        });
      setIsFormClicked({ isFormClicked: true });
      setTimeout(() => {
        setIsFormClicked({ isFormClicked: false });
        setName({ name: '' });
        setEmail({ email: '' });
        setMessage({ message: '' });
      }, 2200);
    }
  };
  return (
    <div id="form-container" className="form-container">
      {isFormClicked
        ? (
          <div className="form-info-end">
            <h1>Thank you for your message</h1>
            <span>We will contact you as soon as possible</span>
          </div>
        ) : (
          <form className="contact-form-data" action="#">
            <div className="form-info">
              <div className="form-info-details form-name">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="type your name"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-info-details form-email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="type your email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-info-textarea">
              <label htmlFor="form-text-area" className="form-textarea-label">
                Your message
              </label>
              <textarea
                id="form-text-area"
                className="form-text-area"
                name="subject"
                placeholder="Lorem ipsum..."
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <button
              className="contact-form-submit"
              type="submit"
              value="Submit"
              onClick={onClickSubmit}
            >
              Send
            </button>
          </form>
        )}
    </div>
  );
}

export default HomeForm;
