import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';

const EpisodeCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const baseUrl = 'http://localhost:3001'
  const { data } = useFetch(baseUrl + pathname)
  const dataById = data

  const handleClick = () => {
    navigate('/episode')
  }
  return (
    <>
      <div className='cardById'>
        <h2 className='card-title'>{dataById.name}</h2>
        <p className='card-text'>Air_date
          - {dataById.air_date
          }</p>
        <p className='card-text'>Episode
          - {dataById.episode
          }</p>
      </div>
      <button onClick={handleClick} >Вернуться к списку</button>
    </>
  );
}

export default EpisodeCard;