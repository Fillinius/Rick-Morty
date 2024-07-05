import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../../src/index.css'
import HeroesList from '../page/heroes/heroesList';

const Heroes = () => {
  const { pathname } = useLocation()
  const baseUrl = 'http://localhost:3001'

  const { data, isLoading, error } = useFetch(baseUrl + pathname)
  return (<>
    {error && (<p>{error} - Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    {data && !isLoading && (
      data.length === 0
        ? 'Список пуст'
        : <HeroesList data={data} />)}
  </>);
}

export default Heroes;