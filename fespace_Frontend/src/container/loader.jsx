import React, {  } from 'react'
import { BounceLoader } from 'react-spinners'
import useRequest from '../utils/useRequest'


const loader = (Component, query, reloadAble = false) => {
  return (props) => {
    // let params = props?.params || {}
    const { data: posts, Reload: reload } = useRequest(query, props.params, reloadAble)
    return (
      <div className={!posts ? ' relative min-h-[300px] w-full  ' : ''}>
        <BounceLoader
          size={60}
          color={'#f47cc8'}
          loading={!posts}
          className='min'
          cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
        {!!posts && <Component result={posts} reload={reload} {...props} />}
      </div>
    )
  }
}

export default loader
