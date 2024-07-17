import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';

const HeroCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { data } = useFetch(pathname)

  const handleClick = () => {
    navigate('/character', { replace: true })
  }
  return (
    <>
      {typeof data === 'undefined'
        ? <div>
          <p>"Ошибка загрузки данных"</p>
          <button onClick={handleClick}>Вернуться к списку</button>
        </div>
        : <><div className='cardById'>
          <img src={data.image} alt={data.name + ' logo'} />
          <h2 className='card-title'>{data.name}</h2>
          <p className='card-text'>Gender - {data.gender}</p>
          <p className='card-text'>Species - {data.species}</p>
          <p className='card-text'>Status - {data.status}</p>

        </div>
          <button onClick={handleClick} >Вернуться к списку</button></>}
    </>
  );
}

export default HeroCard;

