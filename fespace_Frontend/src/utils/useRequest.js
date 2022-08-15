import  { useEffect, useState } from 'react'
import { Client } from '../client'

const UseRequest = (query,params= {},reloadAble) => {
  
  const [data, setData] = useState(false)
  const [reload, Reload] = useState(0);
  useEffect(() => {
    Client.fetch(query,params)
      .then((_data) => setData(_data))
      .catch(console.error)
  }, [query,params,reload])

  return reloadAble ? {data,Reload} :{ data }
}

export default UseRequest
