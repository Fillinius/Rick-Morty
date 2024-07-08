import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';

const HeroCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { data } = useFetch(pathname)
  const dataById = data
  const handleClick = () => {
    navigate('/characters', { replace: true })
  }
  return (
    <>
      <div className='cardById'>
        <img src={dataById.image} alt={dataById.name + ' logo'} />
        <h2 className='card-title'>{dataById.name}</h2>
        <p className='card-text'>Gender - {dataById.gender}</p>
        <p className='card-text'>Species - {dataById.species}</p>
        <p className='card-text'>Status - {dataById.status}</p>

      </div>
      <button onClick={handleClick} >Вернуться к списку</button>
    </>
  );
}

export default HeroCard;
