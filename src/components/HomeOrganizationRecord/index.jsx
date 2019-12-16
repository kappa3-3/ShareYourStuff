import React, {Component} from "react";
import './style.scss';

class OrganizationRecord extends Component {

    render() {
        const { name, description, status} = this.props;
        return (
            <div className='organization-list-item'>
                <div className='organization-list-item-title'>
                    <h1>{ name }</h1>
                    <span>{ description }</span>
                </div>
                <h5>{ status}</h5>
            </div>
        );
    }
}
export default OrganizationRecord;