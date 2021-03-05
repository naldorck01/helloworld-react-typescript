import { useEffect, useState } from "react"

const useFetch = (url: string) => {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  const getDataFromApi = async () => {
    try {
      let res = await fetch(url)
      res = await res.json()
      return res
    } catch (error) {
      return error
    }
  }

  const populateResponse = () => {
    getDataFromApi()
      .then(data => {
        setResponse(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    populateResponse()
  }, [])

  return [response, loading] as const
}

export default useFetch
