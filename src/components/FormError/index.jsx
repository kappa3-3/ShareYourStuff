import React from 'react';
const FormError = ({ touched, message}) => {
    if (!touched === false) {
        return <div className='donate-form-message invalid'/>
    }
    if (message) {
        return <div className='donate-form-message invalid'>{message}</div>
    }
    // return <div className='donate-form-message valid'>All data are correct</div>
};
export default FormError;