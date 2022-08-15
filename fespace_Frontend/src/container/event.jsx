import React from 'react'

import { Q_Event, Event } from '../component'
import {loader}  from './'
const Events = ({ result }) => {
  return (
    <div className='container mx-auto box'>
      {result.length ? (
        result.map((event,i) => <Event event={event} key={`${event.slug.current } ${i}`}/>)
      ) : (
        <span>'there is currently no holding event'</span>
      )}
    </div>
  )
}

export default loader(Events, Q_Event)
