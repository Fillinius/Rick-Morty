import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import EpisodiesList from '../page/episode/episodiesList';


const Episodies = () => {
  const { pathname } = useLocation()

  const { data, isLoading, error } = useFetch(pathname)
  return (<>
    {error && (<p> Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    {data && !isLoading && !error && (
      data.length === 0
        ? 'Список пуст'
        : <EpisodiesList data={data} />)}
  </>);
}

export default Episodies;

