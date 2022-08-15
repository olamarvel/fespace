import { Context } from '../contexts'
import { Meuns, SocialIcons } from './'

const TopNavigation = ({ showIcons = true }) => {
  return (
    <Context value={() => {}}>
      <div className="grow-[3] md:flex flex-row  justify-center items-center hidden text-[0.75rem] lg:text-base">
        <Meuns></Meuns>
      </div>
      <div className={showIcons ? 'hidden md:block' : ''}>

       <SocialIcons block={true} />
      </div>
    </Context>
  )
}

export default TopNavigation
