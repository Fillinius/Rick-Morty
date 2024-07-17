import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASEURL } from '../path/internalPaths.ts'

const useSearchData = (pageNumber, endPoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  console.log(data)

  const uniqueData = (array) =>
    array.reduce((accumulator, current) => {
      if (accumulator.findIndex((object) => object.id === current.id) === -1) {
        accumulator.push(current)
      }
      return accumulator
    }, [])

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: BASEURL.base + endPoint,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data)
        setData((p) => {
          return uniqueData([...p, ...res.data.results])
        })
        setHasMore(res.data.results.length > 0)
        setIsLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return
        }
        setError(false)
        console.log('errAxios', e)
      })
    return () => cancel()
  }, [pageNumber])

  const getDataId = (id) => {
    const itemId = data.find((item) => {
      if (item.id === Number(id)) {
        return item
      }
    })
    return itemId
  }

  return {
    data,
    isLoading,
    error,
    hasMore,
    getDataId,
  }
}

export default useSearchData
