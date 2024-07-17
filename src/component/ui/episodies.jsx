import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EpisodiesList from '../page/episode/episodiesList';
import useSearchData from '../../hooks/useSearchData';


const Episodies = () => {
  const { pathname } = useLocation()
  const endPoint = pathname

  const [pageNumber, setPageNumber] = useState(1)
  const { data,
    isLoading,
    error,
    hasMore,
  } = useSearchData(pageNumber, endPoint)


  const observer = useRef()
  const lastNodeRef = useCallback((node) => {
    // console.log(node);
    if (isLoading) return;
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber((prev) => prev + 1)
        console.log('visible')
      }
    })
    if (node) {
      observer.current.observe(node)
    }
  }, [isLoading, hasMore])
  return (<>
    {error && (<p> Ошибка получения данных</p>)}
    {isLoading && (<h1>Загрузка данных</h1>)}
    {data && !isLoading && !error && (
      data.length === 0
        ? 'Список пуст'
        : <EpisodiesList data={data} lastNodeRef={lastNodeRef} />)}
  </>);
}

export default Episodies;

