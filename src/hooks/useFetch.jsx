import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFetch = (QUERY) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams({ 'n': '' })
  const handleAsc = () => {
    setSearchParams('_sort=created&_order=asc')
  }

  const handleDesc = () => {
    setSearchParams('_sort=created&_order=desc')
  }

  const baseUrl = 'http://localhost:3001'

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

  async function getAsyncData(query, startpoint = baseUrl) {
    try {
      query ? (query = query) : (query = '')
      await fetch(`${startpoint}${query}`)
        .then(res => {
          if (!res.ok) throw new Error('Ошибка получения данных')
          return res.json()
        })
        .then(data => setData(data))
      setIsLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  const getDataId = (id) => {
    return data.find(item => item.id === id)
  }

  return ({
    data,
    isLoading,
    error,
    getDataId,
    handleAsc,
    handleDesc
  });
}

export default useFetch;