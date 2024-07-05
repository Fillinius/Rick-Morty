import React from 'react';
import { Link } from 'react-router-dom';

const EpisodiesList = ({ data }) => {
  return (
    <div className='card'>
      <ul className='card-list'>
        {data.map(item => <li key={item.id} className='card-list--location'>
          <Link to={item.id} className='card-link'>

            <h2 className='card-title'>{item.name}</h2>
            <p className='card-text'>Air_data - {item.air_data}</p>
            <p className='card-text'>Episode - {item.episode}</p>

          </Link>
        </li>)}
      </ul>
    </div>
  );
}

export default EpisodiesList;