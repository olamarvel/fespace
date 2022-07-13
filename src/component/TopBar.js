import { Context } from '../contexts'
import { Meuns, SocialIcons } from './'

export const TopNavigation = () => {
  return (
    <Context value={() => {}}>
      <div className="grow-[3] md:flex flex-row  justify-center items-center hidden text-[0.75rem] lg:text-base">
        <Meuns></Meuns>
      </div>
      <SocialIcons block={true}></SocialIcons>
    </Context>
  )
}
