import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const EpisodiesList = ({ data, lastNodeRef }) => {
  const { pathname } = useLocation()
  return (
    <div className='card'>
      <ul className='card-list'>
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (<li key={item.id} ref={lastNodeRef} className='card-list--location'>
              <Link to={pathname + '/' + item.id} className='card-link'>

                <h2 className='card-title'>{item.name}</h2>
                <p className='card-text'>Air_data - {item.air_data}</p>
                <p className='card-text'>Episode - {item.episode}</p>

              </Link>
            </li>)
          } else {
            return (<li key={item.id} className='card-list--location'>
              <Link to={pathname + '/' + item.id} className='card-link'>

                <h2 className='card-title'>{item.name}</h2>
                <p className='card-text'>Air_data - {item.air_data}</p>
                <p className='card-text'>Episode - {item.episode}</p>

              </Link>
            </li>)
          }

        })}
      </ul>
    </div>
  );
}

export default EpisodiesList;