import React from 'react'

import { Q_Event, Event } from '../component'
import Container from '../layouts/container'
import {loader}  from './'
const Events = ({ result }) => {
  return (
    <Container>
      {result.length ? (
        result.map((event,i) => <Event event={event} key={`${event.slug.current } ${i}`}/>)
      ) : (
        <span>'there is currently no holding event'</span>
      )}
    </Container>
  )
}

export default loader(Events, Q_Event)
