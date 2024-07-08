import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../../src/index.css'
import HeroesList from '../page/heroes/heroesList';
import _ from "lodash"

const Heroes = () => {

  const location = useLocation()
  const { data, isLoading, error, handleAsc, handleDesc } = useFetch(location.pathname)

  return (<>
    {error && (<p>- Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    <div>
      <button onClick={handleAsc}>Asc</button>
      <button onClick={handleDesc}>Desc</button>
    </div>
    {data && !isLoading && !error && (
      data.length === 0
        ? 'Список пуст'
        : <HeroesList data={data} />)}
  </>);
}

export default Heroes;