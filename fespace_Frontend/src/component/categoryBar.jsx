import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ICONS from '../icons'
import { useRequest, QCategoryTitle } from '.'
// import { MobileDropDownView } from './dropdown'

const CategoryBar = ({ name, reversed = false }) => {
  const { data: category } = useRequest(QCategoryTitle)
  const [showCategory, setShowCategory] = useState(false)


  // const close = useContext(FunctionalContext)
  const click = () => setShowCategory(true)
  const closeCategory = () => setShowCategory(false)
  const show = category ? category.slice(0, 4) : false
  return (
    <>
      {category && (
        <>
          <div className={`relative w-full  bg-white text-dark  flex flex-row z-10 text-lg  ${!reversed ? 'shadow-up' : "shadow-xl"} justify-around font-Pacifioco items-center`}>
            {show && show.map((drop, i) => (
              <NavLink
                to={name + '/' + drop}
                className={({ isActive }) =>
                  (isActive ? 'text-secondary' : '') +
                  'px-1 py-1 cursor-pointer flex justify-around hover:text-secondary hover:border-b-1  '
                }
                key={drop + '' + i}
              >
                <span>{drop}</span>
              </NavLink>
            ))}
            <div
              className="border-solid border-b-4 hover:border-secondary outline-none p-0 m-0 cursor-pointer "
              onClick={click}
            >
              All
            </div>
            {showCategory && (
              <DropDownView drops={category.slice(5)} name={name} clicked={closeCategory} />
            )}
          </div>
        </>
      )}
    </>
  )
}

export default CategoryBar



const DropDownView = ({ drops, name, clicked }) => {
  const dropDownClasses = ` top-[150%] absolute bg-white shadow text-dark px-2 py-4 rounded-b-lg  hover:bg-white hover:text-dark w-[99%]`
  return (
    <div className={dropDownClasses}>
      <div className='relative  grid-cols-4 grid'>

        <div className='absolute right-4 top-4' onClick={clicked}><FontAwesomeIcon icon={ICONS.faCircleXmark} /></div>
        {drops.map((drop, i) => (
          <div
            className="px-2 py-1 mb-4 w-fit pr-12 cursor-pointer hover:text-secondary  hover:border-b-2"
            onClick={clicked}
            key={`${drop}${i}`}
          >
            <NavLink
              to={name + '/' + drop}
              className={({ isActive }) => (isActive ? 'text-dark' : '')}
              end
            >
              {drop}
            </NavLink>
          </div>
        ))}
      </div>

    </div>
  )
}
// function isMobile() {
//   return window.innerHeight < window.medium
// }
