import { useContext } from 'react'
import { Meuns, SocialIcons, Logo } from './'
import { FunctionalContext } from '../contexts'

export const SideBar = () => {
  const close = useContext(FunctionalContext)

  return (
    <>
      <nav className=" fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3  bg-white text-dark py-2 flex flex-col z-20 text-lg h-full shadow-card ">
        <Logo styles="grow-[0] px-1 mx-1 " />
        <div className="grow-[3] flex flex-col items-start ">
          <Meuns></Meuns>
        </div>
        <SocialIcons />
      </nav>
      <OverLay onClick={close} />
      {/* <div
        className="bg-dark fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-30"
        onClick={close}
      ></div> */}
    </>
  )
}

const OverLay = ({ onClick }) => {
  return (
    <div
      className="bg-dark fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-30"
      onClick={onClick}
    ></div>
  )
}
