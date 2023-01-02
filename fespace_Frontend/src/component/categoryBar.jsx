import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useRequest, QCategoryTitle } from '.'
// import { MobileDropDownView } from './dropdown'

const Reversed = React.createContext(false)
const CategoryBar = ({ name, reversed = false }) => {
  const {data:category} = useRequest(QCategoryTitle)
  const show = category ? category.slice(0, 4) : false
  return (
    <>
      {category && (
        <Reversed.Provider value={reversed}>
          <div className={`relative w-full  bg-white text-dark  flex flex-row z-10 text-lg  ${!reversed ? 'shadow-up' : "shadow-xl"} justify-around font-Pacifioco items-center`}>
            {show &&
              show.map((drop, i) => (
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
            <CategoryDropDown name={name} drops={category.slice(5)} />
          </div>
        </Reversed.Provider>
      )}
    </>
  )
}

export default CategoryBar

function CategoryDropDown({ name, drops, hasChildren = true }) {
  const [showCategory, setShowCategory] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mousein = () => setHovered(true)
  const mouseout = () => setHovered(false)

  // const close = useContext(FunctionalContext)
  const click = () => setShowCategory(true)
  const closeCategory = () => setShowCategory(false)

  return (
    <>
      <div className=" ">
        <div
          className="border-solid border-b-4 hover:border-secondary outline-none p-0 m-0 cursor-pointer lg:hidden"
          onClick={click}
        >
          All
        </div>
        <div
          className="border-dotted border-b-4 hover:border-secondary outline-none p-0 m-0 cursor-pointer hidden lg:inline-block"
          onMouseEnter={window.innerWidth >= window.medium ? mousein : null}
          // onMouseLeave={window.innerWidth >= window.medium ? mouseout : null}
        >
          All
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

const MobileDropDownView = ({ drops, name, closeCategory }) => {
  const click = () => {
    closeCategory()
  }
  return (
    <>
      <div className=" fixed top-0 left-0 w-3/5 bg-white text-dark py-2 flex flex-col z-20 text-lg h-full shadow-xl rounded-r-lg pl-2">
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
            </div>
          </NavLink>
        ))}
      </div>
      <div
        className="bg-dark fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-30"
        onClick={click}
      ></div>
    </>
  )
}

const DropDownView = ({ drops, name, clicked }) => {
  const reversed = useContext(Reversed)
  const dropDownClasses = `absolute  ${
    reversed ? 'top-[100%]' : 'bottom-[100%] '
  } " right-2 bg-white shadow text-dark px-2 py-4 rounded-b-lg  hover:bg-white hover:text-dark grid-cols-4 grid w-80 `
  return (
    <div className={dropDownClasses} onMouseLeave={clicked}>
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
// function isMobile() {
//   return window.innerHeight < window.medium
// }
