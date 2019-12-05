import React, {Component} from "react";
import './style.scss';

class OrganizationRecord extends Component {

    render() {
        const { id, name, description, status} = this.props;
        return (
            <div className='organization-list-item'>
                <div className='organization-list-item-title'>
                    <h1>{ this.props.name }</h1>
                    <span>{ this.props.description }</span>
                </div>
                <h5>{ this.props.status}</h5>
            </div>
        );
    }
}
export default OrganizationRecord;