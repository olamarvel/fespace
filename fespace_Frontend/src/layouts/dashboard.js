import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../component'

const Dashboard = ({ children }) => {
 const pages = ['Posts', 'Comment', 'User']
 const className = 'hover:text-black text-lg hover:bg-white/10 pl-1 my-0.5 py-3'
 return (
  <div className='grid grid-cols-12 h-screen w-screen relative overflow-auto'>
   <div className='col-span-2 bg-primary text-white flex flex-col sticky top-0 '>
    <Logo styles='grow-0 md grow m-3 ' />
    {pages.map(value => (
     <Link to={'/dashboard/' + value.toLowerCase()} className={className}>
      {value}
     </Link>
    ))}
   </div>
   <div className='col-span-10'>{children}</div>
  </div>
 )
}

export default Dashboard
