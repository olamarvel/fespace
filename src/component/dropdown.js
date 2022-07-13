import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '../icons'
import { SocialIcons } from './'
import { FunctionalContext } from '../contexts'

const Dropdown = ({ name, drops, hasChildren = true }) => {
  const [showCategory, setShowCategory] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mousein = () => setHovered(true)
  const mouseout = () => setHovered(false)

  const close = useContext(FunctionalContext)
  const closeCategory = () => setShowCategory(false)

  const rotating = hovered ? ' -rotate-90 ml-1' : ''
  return (
    <>
      <div className="relative  w-3/4 md:w-fit ">
        <div className=" px-1 lg:px-4 uppercase mx-1 lg:mx-3 cursor-pointer  w-full flex justify-between items-center my-4">
          <NavLink
            to={name === 'Read' ? '/' : name}
            className={({ isActive }) =>
              isActive
                ? 'text-secondary md:text-dark hover:text-secondary'
                : 'hover:text-secondary'
            }
            onClick={close}
            onMouseEnter={window.innerWidth >= window.medium ? mousein : null}
            onMouseLeave={window.innerWidth >= window.medium ? mouseout : null}
          >
            {name}{' '}
            {hasChildren && (
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`${rotating}transition-all duration-500  lg:mx-3 ml-1 hover:text-secondary hidden md:inline-block`}
              />
            )}
          </NavLink>

          {hasChildren && (
            <FontAwesomeIcon
              icon={faCaretDown}
              className={
                ' -rotate-90 transition-all duration-500 md:hidden hover:text-secondary'
              }
              onClick={() => {
                setShowCategory(true)
              }}
            />
          )}
        </div>
        {hovered && hasChildren && (
          <DropDownView drops={drops} name={name} clicked={mouseout} />
        )}
      </div>
      {showCategory && hasChildren && (
        <MobileDropDownView
          drops={drops}
          name={name}
          closeCategory={closeCategory}
        />
      )}
    </>
  )
}

export default Dropdown

export const MobileDropDownView = ({ drops, name, closeCategory }) => {
  const close = useContext(FunctionalContext)
  const click = () => {
    close()
    closeCategory()
  }
  return (
    <div className=" fixed top-0 left-0 w-3/4 bg-white text-dark py-2 flex flex-col z-10 text-lg h-full shadow-xl">
      {drops.map((drop, i) => (
        <NavLink
          to={name + '/' + drop}
          className={({ isActive }) =>
            (isActive ? 'text-secondary' : '') +
            'flex justify-between items-center'
          }
          key={drop + '' + i}
          onClick={click}
        >
          <div className="px-3 py-1 mb-4 pr-12 cursor-pointer hover:text-secondary  hover:border-b-2 w-3/4 flex justify-between">
            <span>{drop}</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={'transition-all duration-500 -rotate-90'}
            />
          </div>
        </NavLink>
      ))}

      <SocialIcons />
    </div>
  )
}

const DropDownView = ({ drops, name, clicked }) => {
  return (
    <div className="z-20 absolute bg-white shadow text-dark px-2 py-4 rounded-b-lg  hover:bg-white hover:text-dark">
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
  )
}
