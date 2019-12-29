import React from "react";
import './style.scss';

export default function OrganizationRecord(props) {

    const {name, description, status} = props;
    return (
        <div className='organization-list-item'>
            <div className='organization-list-item-title'>
                <h1>{name}</h1>
                <span>{description}</span>
            </div>
            <h5 className='organization-list-item-status'>{status}</h5>
        </div>
    );
};
