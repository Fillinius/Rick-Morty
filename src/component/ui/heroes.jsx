import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../src/index.css'
import HeroesList from '../page/heroes/heroesList';
import _ from "lodash"
import useSearchData from '../../hooks/useSearchData';

const Heroes = () => {
  const { pathname } = useLocation()
  const endPoint = pathname

  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState('')
  const { data,
    isLoading,
    error,
    hasMore,
  } = useSearchData(query, pageNumber, endPoint)

  const handleFind = (event) => {
    setQuery(event.target.value)
    setPageNumber(1)
  }
  const handleAsc = () => {
    setPageNumber(p => Number(p) + 5)
  }
  const handleDesc = () => {
    setPageNumber(p => Number(p) - 5)
  }
  console.log(query);
  return (<>
    {error && (<p>- Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    <div className='find'>
      <input type="text" onChange={handleFind} />
    </div>
    <div>
      <button onClick={handleAsc}>Next</button>
      <button onClick={handleDesc}>Previos</button>
    </div>
    {data && !isLoading && !error && (
      data.length === 0
        ? 'Список пуст'
        : <HeroesList data={data} />)}
  </>);
}

export default Heroes;