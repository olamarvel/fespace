import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ICONS from '../icons'
import { Context } from '../contexts'
import { TopBar, SideBar, CategoryBar,Logo } from './'

const Navbar = ({noCategory=false}) => {
  const [toggle, setToggle] = useState(false)
  const toggled = () => {
    setToggle(!toggle)
  }
  return (
    <Context value={toggled}>
      <div className=' top-0 left-0 w-full font-Pacifioco'>
        <nav className="bg-primary w-full text-white   font-Lora lg:px-4 px-2 py-2 shadow-lg hover:bg-white hover:text-dark h-fit z-100 select-none">
          <div className="flex flex-row h-fit container   mx-auto sm:box justify-center items-center">
            <Logo />
            <TopBar />
            <div onClick={toggled} className="md:hidden">
              <FontAwesomeIcon
                icon={ICONS.faBars}
                className={'mx-1 hover:text-secondary'}
              />
            </div>
          </div>
        </nav>
        {!noCategory && <CategoryBar name='Read' reversed={true}/>}
      </div>
      {toggle && <SideBar />}
    </Context>
  )
}

export default Navbar
