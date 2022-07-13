import { useContext } from 'react'
import { Meuns, SocialIcons } from './'
import { FunctionalContext } from '../contexts'

export const SideBar = () => {
  const close = useContext(FunctionalContext)

  return (
    <>
      <div className=" fixed top-0 left-0 w-3/4 bg-white text-dark py-2 flex flex-col z-20 text-lg h-full shadow-xl rounded-r-lg">
        <div className="grow-[3] flex flex-col items-start ">
          <Meuns></Meuns>
        </div>
        <SocialIcons />
      </div>
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

