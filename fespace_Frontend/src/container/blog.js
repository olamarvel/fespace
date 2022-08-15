import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from '../component'
import { Home, Read, Event, Donation } from './'
const Blog = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="read/:category" element={<Read />} />
        <Route path="events" element={<Event />} />
        <Route path="donation" element={<Donation />} />
      </Routes>
    </>
  )
}

export default Blog
