import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASEURL } from '../path/internalPaths.ts'

const useSearchData = (query, pageNumber, endPoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    let cancel
    axios(
      {
        method: 'GET',
        url: BASEURL.base + endPoint,
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      },
      [query, pageNumber]
    )
      .then((res) => {
        setData(res.data.results)

        // setData((p) => {
        //   return [...new Set([...p, ...res.data.results])]
        // })
        setHasMore(res.data.results.length > 0)
        setIsLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(false)
        console.log('errAxios', e)
      })
  }, [query, pageNumber])

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
