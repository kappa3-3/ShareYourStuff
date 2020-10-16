import React, { useEffect, useState } from 'react';
import OrganizationRecord from '../HomeOrganizationRecord';
import decoration from '../../assets/icons/Decoration.svg';
import './style.scss';

function HomeSupport() {
  const [type, setType] = useState('nonprofit');
  const [organizations, setOrganizations] = useState([]);
  const [pageCount, setPageCount] = useState(3);
  const [page, setPage] = useState(0);

  const getFromDb = collection => {
    fetch('/.netlify/functions/organizations', {
      method: 'POST',
      body: collection,
    }).then(res => res.json())
      .then(org => {
        setOrganizations(org.data);
        setPageCount(Math.ceil(org.data.length / 3));
        setType(collection);
        setPage(0);
      });
  };

  useEffect(() => {
    getFromDb('nonprofit');
  }, []);

  const indexStart = 3 * (page + 1) - 3;
  const indexEnd = 3 * (page + 1);
  const records = organizations.slice(indexStart, indexEnd).map(record => (
    <OrganizationRecord
      key={record.name}
      name={record.name}
      description={record.description}
      status={record.status}
    />
  ));

  const pages = () => {
    if (pageCount !== 1) {
      return [...Array(pageCount).fill(type)].map((item, i) => {
        const name = `${item}-${i}`;
        return (
          <button
            type="button"
            key={name}
            onClick={() => setPage(i)}
            className={page === i ? 'active-page' : 'home-support-page'}
          >
            {i + 1}
          </button>
        );
      });
    }
    return null;
  };

  return (
    <div id="support-container" className="support-container">
      <span className="support-title">Who are we supporting?</span>
      <img src={decoration} alt="decoration" />
      <div className="support-types-wrapper">
        <button
          type="button"
          className={type === 'nonprofit' ? 'support-active' : 'support-type'}
          data-opt="nonprofit"
          onClick={e => getFromDb(e.target.dataset.opt)}
        >
          Nonprofit organizations
        </button>
        <button
          type="button"
          className={type === 'nongovern' ? 'support-active' : 'support-type'}
          data-opt="nongovern"
          onClick={e => getFromDb(e.target.dataset.opt)}
        >
          Non-governmental organization
        </button>
        <button
          type="button"
          className={type === 'localfunds' ? 'support-active' : 'support-type'}
          data-opt="localfunds"
          onClick={e => getFromDb(e.target.dataset.opt)}
        >
          Local fund-raiser
        </button>
      </div>
      <p className="home-support-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Deleniti earum error explicabo facilis illo impedit libero magnam maiores praesentium,
        quaerat, quidem rem repellendus sunt totam vitae. Maiores.
      </p>
      <div className="organization-list-wrapper">
        {records}
      </div>
      <div className="support-pages">
        {pages()}
      </div>
    </div>
  );
}

export default HomeSupport;
