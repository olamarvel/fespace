

import { Slides, Qslides,Slider } from './'

import { loader } from './../container'

const _Header = ({ result }) => {
  return (
    <div className="w-full bg-white h-[75vh] min-h-[500px] max-h-[650px] relative  border-b-primary ">
      <Slider data={result} Slide={Slides}/>
    </div>
  )
}

const Header = loader(_Header, Qslides)
export default Header


