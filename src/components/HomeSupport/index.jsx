import React, { useEffect, useState } from "react";
import OrganizationRecord from '../HomeOrganizationRecord'
import { URL_NONPROFIT, URL_NON_GOV, URL_LOCAL_FUND } from '../../commons/URL';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

function HomeSupport() {
  const [type, setType] = useState('nonprofit');
  const [organizations, setOrganizations] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const handleOrganizationType = (e) => {
    setType(e.target.dataset.opt);
    setPage(0);
  };

  const handlePage = (i) => setPage(i);

  useEffect(() => {
    fetch(URL_NONPROFIT)
      .then(data => data.json())
      .then(org => setOrganizations(org))
      .then(() => setPageCount(Math.ceil(organizations.length / 3)))
  }, [])


  // componentDidUpdate(prevProps, prevState) {

  //   if (this.state.type === 'nonprofit' && prevState.type !== this.state.type) {

  //     fetch(URL_NONPROFIT).then(data => data.json()).then(organizations => this.setState({ organizations },
  //       () => this.setState({ pageCount: Math.ceil(this.state.organizations.length / 3) })));
  //   } else if (this.state.type === 'non-gov' && prevState.type !== this.state.type) {

  //     fetch(URL_NON_GOV)
  //       .then(data => data.json()).then(organizations => this.setState({ organizations },
  //         () => this.setState({ pageCount: Math.ceil(this.state.organizations.length / 3) })));
  //   } else if (this.state.type === 'local-fund' && prevState.type !== this.state.type) {

  //     fetch(URL_LOCAL_FUND)
  //       .then(data => data.json()).then(organizations => this.setState({ organizations },
  //         () => this.setState({ pageCount: Math.ceil(this.state.organizations.length / 3) })));
  //   }
  // };

  // useEffect(() => {

  //   if (type === 'nonprofit') {
  //     fetch(URL_NONPROFIT)
  //     .then(data => data.json())
  //     .then(org => setOrganizations(org)
  //     .then(() => setPageCount( Math.ceil(organizations.length / 3))))
  //   } else if (type === 'non-gov') {
  //     fetch(URL_NON_GOV)
  //       .then(data => data.json())
  //       .then(org => setOrganizations(org)
  //       .then(() => setPageCount( Math.ceil(organizations.length / 3))))
  //   } else if (type === 'local-fund') {

  //     fetch(URL_LOCAL_FUND)
  //       .then(data => data.json())
  //       .then(org => setOrganizations(org)
  //       .then(() => setPageCount( Math.ceil(organizations.length / 3))))
  //   }
  // }, [type]);

  const indexStart = 3 * (page + 1) - 3;
  const indexEnd = 3 * (page + 1);
  const records = organizations.slice(indexStart, indexEnd).map(record => {
    return (
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
    if (pageCount !== 1) {
      return [...Array(pageCount).fill(1)].map((item, i) =>
        <button
          key={`home-support-${i}`}
          onClick={() => handlePage(i)}
          className={page === i ? 'active-page' : 'home-support-page'}
        >{i + 1}</button>);
    }
  };

  return (
    <div id='support-container' className='support-container'>
      <span className='support-title'>Who are we supporting?</span>
      <img src={decoration} alt='decoration' />
      <div className='support-types-wrapper'>
        <span
          className={type === 'nonprofit' ? 'support-active' : 'support-type'}
          data-opt='nonprofit'
          onClick={handleOrganizationType}
        >
          Nonprofit organizations
                    </span>
        <span
          className={type === 'non-gov' ? 'support-active' : 'support-type'}
          data-opt='non-gov'
          onClick={handleOrganizationType}
        >
          Non-governmental organization
                    </span>
        <span
          className={type === 'local-fund' ? 'support-active' : 'support-type'}
          data-opt='local-fund'
          onClick={handleOrganizationType}
        >
          Local fund-raiser
                    </span>
      </div>
      <p className='home-support-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti earum error explicabo facilis illo
      impedit libero magnam maiores praesentium, quaerat, quidem rem repellendus sunt totam vitae.
                    Maiores.</p>
      <div className='organization-list-wrapper'>
        {records}
      </div>
      <div className='support-pages'>
        {pages()}
      </div>
    </div>
  );
}

export default HomeSupport;