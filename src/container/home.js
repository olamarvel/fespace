import React from 'react'
import { loader } from '.'
import { Section, QCategory, QFeatured } from '../component'

const _Featured = ({ result }) => <Section title={'featrued'} posts={result} />

const _Categorized = ({ result }) => (
  <>
    {result
      .filter((category) => category?.Posts.length)
      .map((v, i) => (
        <Section title={'' + v.title} key={'' + v.title + i} posts={v.Posts} />
      ))}
  </>
)
const Categorized = loader(_Categorized, QCategory)
const Featured = loader(_Featured, QFeatured)
export const Home = () => {
  return (
    <>
      <Featured />
      <Categorized />
    </>
  )
}
