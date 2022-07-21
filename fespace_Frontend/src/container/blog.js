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
        <Route path="Read/:category" element={<Read />} />
        <Route path="Events" element={<Event />} />
        <Route path="Donation" element={<Donation />} />
      </Routes>
    </>
  )
}

export default Blog
