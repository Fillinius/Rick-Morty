import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Locationslist from '../page/locations/locationsList';


const Locations = () => {
  const { pathname } = useLocation()
  const baseUrl = 'http://localhost:3001'

  const { data, isLoading, error } = useFetch(baseUrl + pathname)
  return (<>
    {error && (<p> Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    {data && !isLoading && !error && (
      data.length === 0
        ? 'Список пуст'
        : <Locationslist data={data} />)}
  </>);
}

export default Locations;

// {/* <HeroesList data={data} /> */ }