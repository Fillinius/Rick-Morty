import React from 'react';
import { Link } from 'react-router-dom';

const Locationslist = ({ data }) => {
  return (
    <div className='card'>
      <ul className='card-list '>
        {data.map(item => <li key={item.id} className='card-list--location'>
          <Link to={item.id} className='card-link '>

            <h2 className='card-title'>{item.name}</h2>
            <p className='card-text'>Dimension - {item.dimension}</p>
            <p className='card-text'>Type - {item.type}</p>
            <p className='card-text'>Status - {item.status}</p>
          </Link>
        </li>)}
      </ul>
    </div>
  );
}

export default Locationslist;