import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function OrganizationRecord({ name, description, status }) {
  return (
    <div className="organization-list-item">
      <div className="organization-list-item-title">
        <h1>{name}</h1>
        <span>{description}</span>
      </div>
      <h5 className="organization-list-item-status">{status}</h5>
    </div>
  );
}

OrganizationRecord.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
