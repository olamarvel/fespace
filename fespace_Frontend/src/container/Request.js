import React, { useEffect, useState } from 'react'
import { Client } from '../client'

const Request = ({ query ,children }) => {
  const [posts, setPost] = useState(null)

  useEffect(() => {
    Client.fetch(query)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [query])
  return <>{children}</>
}

export default Request
