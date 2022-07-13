import  { useEffect, useState } from 'react'
import { Client } from '../client'

const UseRequest = (query,params= {}) => {
  
  const [data, setData] = useState(false)

  useEffect(() => {
    Client.fetch(query,params)
      .then((_data) => setData(_data))
      .catch(console.error)
  }, [query,params])

  return data
}

export default UseRequest
