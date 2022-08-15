import React, { useContext, useState } from 'react'
import { Context, PRODUCTCONTEXT } from '../contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ICONS from '../icons'
import { TopBar, SideBar, Logo } from '.'
import { faCartPlus } from '../icons'
import { NavLink } from 'react-router-dom'

const ProductBar = ({cart}) => {
  const [toggle, setToggle] = useState(false)
  const toggled = () => {
    setToggle(!toggle)
  }
 
  // const { cart } = useContext(PRODUCTCONTEXT)
  const Cart = cart.total_items ? (
    <NavLink
      to="cart"
      className={({ isActive }) =>
        (isActive ? 'text-secondary' : '') + 'w-fit h-fit relative'
      }
    >
      {/* <Link to="cart" className=> */}
      <FontAwesomeIcon
        icon={faCartPlus}
        className="span w-6 h-6 hover:text-primary"
      />{' '}
      <span className="absolute text-sm right-0 top-0 bg-red-500 rounded-full w-3 h-3 flex justify-center items-center">
        {cart.total_items}
      </span>
    </NavLink>
  ):null;

  // debugger
  return (
    <Context value={toggled}>
      <div className=" top-0 left-0 w-full font-Pacifioco">
        <nav className="bg-primary w-full text-white   font-Lora lg:px-4 px-2 py-2 shadow-lg hover:bg-white hover:text-dark h-fit z-100 select-none">
          <div className="flex flex-row h-fit container   mx-auto sm:box  justify-around md:justify-center items-center">
            <Logo styles="grow-0 md grow" />
            {/* <div className='hidden md:block'> */}
            <TopBar showIcons={false} />
            {/* </div> */}
            {Cart}
            <div onClick={toggled} className="md:hidden">
              <FontAwesomeIcon
                icon={ICONS.faBars}
                className={'mx-1 hover:text-secondary'}
              />
            </div>
          </div>
        </nav>
      </div>
      {toggle && <SideBar />}
    </Context>
  )
}

export default ProductBar
