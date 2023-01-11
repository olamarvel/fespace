import React, { useEffect, useState } from 'react'
import { Client } from '../client'
import loader from '../container/loader'
import { QCategoryTitle } from '../utils/query'

const CreatePost = ({ result }) => {
 const [image, setImage] = useState(null)
 const [headline, setHeadline] = useState(null)
 const [categories] = useState(result)
 const [featured, setFeatured] = useState(false)
 const [body, setBody] = useState(null)
 const [category, setCategory] = useState(null)

 const handleFileChange = event => {
  const file = event.target.files[0]
  
  // Read the file as a data URL
  const reader = new FileReader()
  reader.addEventListener('load', () => {
  
   setImage([file.name,reader.result])
  })
  reader.readAsDataURL(file)
 }

 const lebelClass = 'text-primary text-2xl'
 return (
  <div className='flex justify-center'>
   <div className=' sm:w-10/12 w-full'>
    <form method='post' className='flex flex-col gap-1 dashboard pt-4'>
     <div className='relative w-full h-96 border'>
      <label htmlFor='image' className='btn absolute top-2 left-2'>
       Upload Image
      </label>
      <input
       type='file'
       id='image'
       className='hidden'
       onChange={handleFileChange}
      />
      {image && (
       <img
        src={image}
        alt='imagePlaceHolder'
        className='w-full h-full object-fill'
       />
      )}
     </div>
     {/* <label htmlFor='headline' className={lebelClass}>
      
     </label> */}
     <input
      type='text'
      id='headline'
      value={headline}
      onChange={e => {
       setHeadline(e.target.value)
      }}
      className='bg-gray-200 h-8'
      placeholder='Headline'
     />
     <label htmlFor='categories' className={lebelClass}>
      Select Categories
     </label>
     <select
      value={category}
      onChange={e => {
       setCategory(e.target.value)
      }}
      id='categories'
     >
      {categories &&
       categories.map(categories => (
        <option value={categories} key={categories}>
         {categories}{' '}
        </option>
       ))}
     </select>
     <label htmlFor='featured' className={lebelClass}>Featured</label>
     <input
      type='checkbox'
      id='featured'
      value={featured}
      onChange={e => {
       setFeatured(e.target.value)
      }}
     />
     <label htmlFor='body' className={lebelClass}>Body</label>
     <textarea
      value={body}
      onChange={e => {
       setBody(e.target.value)
      }}
      rows={5}
      cols={50}
      placeholder='Enter your message here'
     />
     <button type="submit" className='btn'>submit</button>
    </form>
   </div>
  </div>
 )
}

export default loader(CreatePost, QCategoryTitle)


