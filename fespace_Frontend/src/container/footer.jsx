// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {  Logo } from '../component'

const Footer = () => {
  return (
    <div className=" bg-primary">
      {/* <CategoryBar name="Read" reversed={false} /> */}
      {/* relative w-full  bg-white text-dark  flex flex-row z-10 text-lg  ${!reversed ? 'shadow-up' : "shadow-xl"} justify-around font-Pacifioco items-center */}
      <div className=" w-full z-20 grid grid-cols-4 justify-center px-2 text-sm sm:text-base py-2 sm:py-4  text-white">
        <Logo styles="" />
        {/* <div className="col-span-8 flex"> */}
        <span className="grow">08064526418</span>
        <span className="grow">08064526418</span>
        <span className="grow">
          <Link to="https://google.com" > 
          &copy; olamarvel
            {/* <FontAwesomeIcon icon={ICONS.faArrowRightLong} /> */}
          </Link> 
        </span>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Footer
