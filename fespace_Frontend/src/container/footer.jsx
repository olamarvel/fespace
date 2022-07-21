import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryBar, Logo, ICONS } from '../component'

const Footer = () => {
  return (
    <div className=" bg-primary">
      {/* <div className="container mx-auto "> */}
      <CategoryBar name="Read" reversed={false} />
      <div className="z-20  shadow grid grid-rows-4 sm:grid-cols-4 container mx-auto justify-center box px-4 py-2 sm:py-4  text-white">
        <Logo styles="" />
        {/* <div className="col-span-8 flex"> */}
        <span className="grow">08064526418</span>
        <span className="grow">08064526418</span>
        <span className="grow">
          &copy; olamarvel
          <Link to="https://google.com" className="grow mr-8">
            <FontAwesomeIcon icon={ICONS.faArrowRightLong} />
          </Link>
        </span>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Footer
