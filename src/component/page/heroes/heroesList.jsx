import React from 'react';
import './style.css'
import { Link, useLocation } from 'react-router-dom';

const HeroesList = ({ data }) => {
  const { pathname } = useLocation()

  return (
    <div className='card'>
      <ul className='card-list'>
        {data.map(item => <li key={item.id}>
          <Link to={pathname + '/' + item.id} className='card-link'>
            <img src={item.image} alt={item.name + ' logo'} />
            <h2 className='card-title'>{item.name}</h2>
            <p className='card-text'>Gender - {item.gender}</p>
            <p className='card-text'>Species - {item.species}</p>
            <p className='card-text'>Status - {item.status}</p>
          </Link>
        </li>)}
      </ul>
    </div>
  );
}

export default HeroesList;

{/* <Link to={pathname + '/' + item.id}  */ }