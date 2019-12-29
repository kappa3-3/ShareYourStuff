import React, {Component} from "react";

import OrganizationRecord from '../HomeOrganizationRecord'
import { URL_NONPROFIT, URL_NON_GOV, URL_LOCAL_FUND } from '../../commons/URL';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

class HomeSupport extends Component {

    state = {
        type: 'nonprofit',
        organizations: [],
        pageCount: 0,
        page: 0
    };

    handleOrganizationType = (e) => this.setState({type: e.target.dataset.opt, page:0});

    handlePage = (i) => this.setState({page: i});

    componentDidMount(e) {

        fetch(URL_NONPROFIT).then(data => data.json()).then(organizations => this.setState({organizations},
            () =>  this.setState({pageCount:Math.ceil(this.state.organizations.length / 3)})));
            }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.type === 'nonprofit' && prevState.type !== this.state.type) {

            fetch(URL_NONPROFIT).then(data => data.json()).then(organizations => this.setState({organizations},
                () =>  this.setState({pageCount:Math.ceil(this.state.organizations.length / 3)})));
        } else if (this.state.type === 'non-gov' && prevState.type !== this.state.type) {

                fetch(URL_NON_GOV)
                    .then(data => data.json()).then(organizations => this.setState({organizations},
                        () =>  this.setState({pageCount:Math.ceil(this.state.organizations.length / 3)})));
        }else if (this.state.type === 'local-fund' && prevState.type !== this.state.type) {

            fetch(URL_LOCAL_FUND)
                .then(data => data.json()).then(organizations => this.setState({organizations},
                () =>  this.setState({pageCount:Math.ceil(this.state.organizations.length / 3)})));
        }
    };

    render() {
        const { type, organizations, page } = this.state;
        const indexStart = 3*(page+1)-3;
        const indexEnd = 3*(page+1);
        const records = organizations.slice( indexStart, indexEnd ).map(record => {
            return(
                <>
                    <OrganizationRecord
                        key={record.id}
                        name={record.name}
                        description={record.description}
                        status={record.status}
                    />
                </>
            )
        });

        const pages = () => {
            const { pageCount,page } = this.state;
            if ( pageCount !== 1 ) {
                return [...Array(pageCount).fill(1)].map((item, i) =>
                    <button
                    key={i}
                    onClick={()=>this.handlePage(i)}
                    className={page === i ? 'active-page' : 'home-support-page'}
                >{i+1}</button>);
            }

        };
        return (
            <div id='support-container' className='support-container'>
                <span className='support-title'>Who are we supporting?</span>
                <img src={ decoration } alt='decoration'/>
                <div className='support-types-wrapper'>
                    <span
                        className={type === 'nonprofit' ? 'support-active' : 'support-type'}
                        data-opt='nonprofit'
                        onClick={this.handleOrganizationType}
                    >
                        Nonprofit organizations
                    </span>
                    <span
                        className={type === 'non-gov' ? 'support-active' : 'support-type'}
                        data-opt='non-gov'
                        onClick={this.handleOrganizationType}
                    >
                        Non-governmental organization
                    </span>
                    <span
                        className={type === 'local-fund' ? 'support-active' : 'support-type'}
                        data-opt='local-fund'
                        onClick={this.handleOrganizationType}
                    >
                        Local fund-raiser
                    </span>
                </div>
                <p className='home-support-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti earum error explicabo facilis illo
                    impedit libero magnam maiores praesentium, quaerat, quidem rem repellendus sunt totam vitae.
                    Maiores.</p>
                <div className='organization-list-wrapper'>
                    { records }
                </div>
                <div className='support-pages'>
                    { pages() }
                </div>
            </div>
        );
    };
}

export default HomeSupport;