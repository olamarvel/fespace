import React from 'react'
import { BounceLoader } from 'react-spinners'
import { useRequest } from '../component'

export const loader = (Component, query, params = {}) => {
  return (props) => {
    const posts = useRequest(query, params)
    return (
      <div className={!posts ? ' relative h-50 w-full' : ''}>
        <BounceLoader
          size={60}
          color={'#f47cc8'}
          loading={!posts}
          cssOverride={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
        {!!posts && <Component result={posts} {...props} />}
      </div>
    )
  }
}

