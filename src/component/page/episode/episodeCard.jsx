import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';

const EpisodeCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { data } = useFetch(pathname)

  const handleClick = () => {
    navigate('/episode')
  }
  return (
    <>
      <div className='cardById'>
        <h2 className='card-title'>{data.name}</h2>
        <p className='card-text'>Air_date
          - {data.air_date
          }</p>
        <p className='card-text'>Episode
          - {data.episode
          }</p>
      </div>
      <button onClick={handleClick} >Вернуться к списку</button>
    </>
  );
}

export default EpisodeCard;