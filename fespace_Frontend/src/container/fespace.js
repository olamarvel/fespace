import { Header } from '../fespace'
import { QCategory, Section } from '../component'
import {loader}  from './'
import useSplash from '../utils/useSplash'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const img = useSplash()
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if(!userInfo) navigate('/login?redirect=fespace', { replace: true });
  }, [navigate]);
  return (
    <div>
      <Header images={img} />
      <Categorized />
    </div>
  )
}

export default Fespace
