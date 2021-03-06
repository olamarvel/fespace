import React from 'react'
import { useParams } from 'react-router-dom'
import {  Q_F_Category, Section, useRequest } from '../component'

const Read = () => {
  const { category } = useParams()
  const query = Q_F_Category
  const posts = useRequest(query, { type: '' + category })
  return (
    <div>{posts && <Section title={posts.title} posts={posts.Posts} />}</div>
  )
}

export default Read
