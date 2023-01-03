import  { useEffect, useMemo, useState } from 'react'
import { Client } from '../client'

const UseRequest = (query,params,reloadAble) => {
  
  const param = useMemo(() => params || {}, [params])
  const [data, setData] = useState(false)
  const [reload, Reload] = useState(0);
  useEffect(() => {
    Client.fetch(query,param)
      .then((_data) => setData(_data))
      .catch(console.error)
  }, [query,param,reload])

  return reloadAble ? {data,Reload} :{ data }
}

export default UseRequest
