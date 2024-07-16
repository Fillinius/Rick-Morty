import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BASEURL } from '../path/internalPaths.ts';


const useFetch = (QUERY) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams({ 'n': '' })

  useEffect(() => {
    getAsyncData(QUERY)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(true)
      setIsLoading(false)
    }
  }, [error])

  async function getAsyncData(query, startpoint = BASEURL.base) {
    try {
      query ? (query = query) : (query = '')
      await fetch(`${startpoint}${query}`)
        .then(res => {
          if (!res.ok) throw new Error('Ошибка получения данных')
          return res.json()
        })
        .then(data => setData(data.results))
      setIsLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  const handleAsc = () => {
    setSearchParams('_sort=created&_order=asc')
  }
  const handleDesc = () => {
    setSearchParams('_sort=created&_order=desc')
  }

  const getDataId = (id) => {
    const itemId = data.find(item => {
      if (item.id === Number(id)) { return item }
    })
    return itemId
  }

  const formatDataFromSearchCreated = (formatData) => {
    const changeData = formatData.map(item => (
      {
        ...item,
        created: ((item.created.slice(0, 19).replace('T', ' ')))
      }
    ))
    return changeData
  }
  return ({
    data: data,
    isLoading,
    error,
    getDataId,
    handleAsc,
    handleDesc
  });
}

export default useFetch;