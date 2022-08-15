// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { loader } from '../container'
import { Card } from './'
const Section = ({ title = 'section', posts }) => {

  return (
    <div className="container mx-auto box py-12 flex flex-col ite ">
      <Link to={'Read/' + title}>
        <h3 className=" text-xl capitalize border-b-primary border-b-2 w-fit box-content cursor-pointer">
          {title}
        </h3>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 my-4">
        {posts?.length ? (
          posts.map((post, i) => {
            const { mainImage: image, title, publishedAt, body, slug } = post
            return (
              <Card
                image={image}
                title={title}
                publishedAt={publishedAt}
                body={body}
                slug={slug}
                key={'' + slug.current + i}
              />
            )
          })
        ) : (
          <div className="flex justify-center item-center col-span-1 sm:grid-cols-2 md:col-span-3 lg:col-span-4 2xl:col-span-6  ">
            <span className='text-2xl text-bold font-Lora '>No post found (˘_˘٥)</span>{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section
