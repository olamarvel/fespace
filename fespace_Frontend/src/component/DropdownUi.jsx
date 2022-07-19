import React from 'react'
import { urlFor } from '../client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICONS } from '.'

const Guests = ({ guests }) => {
  return (
    <>
      {guests.map(({ image, name, slug: { current } }) => {
        const src = image && urlFor(image).width(50).height(50).url()
        return (
          <div className="flex justify-between my-2 " key={current}>
            <img src={src} alt={name} className="rounded shadow w-8 h-8" />
            <span>{name}</span>
          </div>
        )
      })}
    </>
  )
}

const Dropdown = ({ drops }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  const buttonClasses = `w-full center font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  my-1 ease-linear transition-all duration-150 `
  return (
    <>
      <div className="relative inline-flex align-middle w-full">
        <button
          className={buttonClasses}
          type="button"
          onClick={() =>
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
          }
        >
          <span className="text-dark">speakers</span>
          <div className="grow flex justify-around">
            {drops.map(({ image, name, slug: { current } }) => (
              <img
                src={image && urlFor(image).width(50).height(50).url()}
                alt={name}
                className="rounded shadow w-8 h-8"
                key={current}
              />
            ))}
          </div>
          <FontAwesomeIcon icon={ICONS.faCaretDown} />
        </button>
        <div
          className={
            (dropdownPopoverShow ? 'block ' : 'hidden ') +
            'text-base z-50 float-left  list-none text-left rounded shadow-lg absolute top-[110%] left-0 right-0 bg-white my-2 py-2 card'
          }
          style={{ minWidth: '12rem' }}
        > 
          <Guests guests={drops} />
        </div>
      </div>
    </>
  )
}

export default Dropdown
