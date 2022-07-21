import { Header } from '../fespace'
import { useEffect, useState } from 'react'
import { unSplash } from '../utils/unsplash'
import { QCategory, Section } from '../component'
import { loader } from './loader'

const demo = ['inspirations', 'interviews', 'events']

const _Categorized = ({ result }) => {
  result = result.filter((category) => category?.Posts.length)
  return (
    <>
      {demo.map((v, i) => (
        <Section title={'' + v} key={'' + v + i} posts={result[i].Posts} />
      ))}
    </>
  )
}
const Categorized = loader(_Categorized, QCategory)
const Fespace = () => {
  const [images, setImages] = useState(null)

  useEffect(() => {
    unSplash.then((Images) => {
      setImages(Images)
    })
  }, [])

  return (
    <div>
      <Header images={images} />
      <Categorized />
    </div>
  )
}

export default Fespace
