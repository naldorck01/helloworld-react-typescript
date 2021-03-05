import React, { useEffect, useState } from "react"

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
    populateResponse()
    console.log(response)
  }, [])

  return [response, loading] as const
}

export default useFetch
