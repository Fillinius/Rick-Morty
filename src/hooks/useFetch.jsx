import { useEffect, useState } from 'react';


const useFetch = (URL) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAsyncData()
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(true)
      setIsLoading(false)
    }
  }, [error])

  async function getAsyncData() {
    try {
      await fetch(URL)
        .then(res => {
          if (!res.ok) throw new Error("Ошибка получения данных")
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
    getDataId
  });
}

export default useFetch;