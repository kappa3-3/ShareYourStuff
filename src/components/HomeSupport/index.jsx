import React, {Component} from "react";
import './style.scss';
import decoration from '../../assets/icons/Decoration.svg';
import OrganizationRecord from '../HomeOrganizationRecord'

class HomeSupport extends Component {

    state = {
        type: '',
        organizations: [],
        count: '',
        page: 1
    };

    handleOrganizationType = (e) => this.setState({type: e.target.dataset.opt});

    handleFirstPage = () =>this.setState({page:0});
    handleSecondPage = () =>this.setState({page:4});
    handleThirdPage = () =>this.setState({page:8});

    componentDidMount() {
        const URL_NONPROFIT = 'http://localhost:3001/nonprofit';
        fetch(URL_NONPROFIT).then(data => data.json()).then(organizations => this.setState({organizations}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.type === 'nonprofit' && prevState.type !== this.state.type) {
            const URL_NONPROFIT = 'http://localhost:3001/nonprofit';
            fetch(URL_NONPROFIT).then(data => data.json()).then(organizations => this.setState({organizations}));
        } else if (this.state.type === 'non-gov' && prevState.type !== this.state.type) {
                const URL_NON_GOV = 'http://localhost:3002/nongovernmental';
                fetch(URL_NON_GOV)
                    .then(data => data.json())
                    .then(organizations => this.setState({organizations}));
        }else if (this.state.type === 'local-fund' && prevState.type !== this.state.type) {
            const URL_LOCAL_FUND = 'http://localhost:3003/local-fund-raisers';
            fetch(URL_LOCAL_FUND)
                .then(data => data.json())
                .then(organizations => this.setState({organizations}));
        }
    };

    render() {
        const { type, organizations, page } = this.state;

        const records = organizations.slice(page, page + 3).map(record => {

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
        return (
            <div id='support-container'>
                <span className='support-title'>Who are we supporting?</span>
                <img src={ decoration } alt='decoration'/>
                <div className='support-types-wrapper'>
                    <span
                        className={type === 'nonprofit' ? 'active' : ''}
                        data-opt='nonprofit'
                        onClick={this.handleOrganizationType}
                    >
                        Nonprofit organizations
                    </span>
                    <span
                        className={type === 'non-gov' ? 'active' : ''}
                        data-opt='non-gov'
                        onClick={this.handleOrganizationType}
                    >
                        Non-governmental organization
                    </span>
                    <span
                        className={type === 'local-fund' ? 'active' : ''}
                        data-opt='local-fund'
                        onClick={this.handleOrganizationType}
                    >
                        Local fund-raiser
                    </span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti earum error explicabo facilis illo
                    impedit libero magnam maiores praesentium, quaerat, quidem rem repellendus sunt totam vitae.
                    Maiores.</p>
                <div className='organization-list-wrapper'>
                    { records }
                </div>
                <div className='support-pages'>
                    <a onClick={this.handleFirstPage}>1</a>
                    <a onClick={this.handleSecondPage}>2</a>
                    <a onClick={this.handleThirdPage}>3</a>
                </div>
            </div>
        );
    };
}

export default HomeSupport;